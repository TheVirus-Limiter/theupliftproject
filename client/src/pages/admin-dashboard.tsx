import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  DollarSign, 
  FileText, 
  LogOut, 
  Save, 
  Plus,
  Trash2,
  Edit,
  Eye,
  EyeOff
} from "lucide-react";
import type { 
  FundraisingProgress, 
  CampaignUpdate,
  InsertFundraisingProgress,
  InsertCampaignUpdate 
} from "@shared/schema";

export default function AdminDashboard() {
  const [, navigate] = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // State for fundraising progress
  const [fundraisingProgress, setFundraisingProgress] = useState<FundraisingProgress | null>(null);
  const [progressForm, setProgressForm] = useState<InsertFundraisingProgress>({
    currentAmount: 0,
    goalAmount: 50000,
    donorCount: 0
  });

  // State for campaign updates
  const [campaignUpdates, setCampaignUpdates] = useState<CampaignUpdate[]>([]);
  const [newUpdate, setNewUpdate] = useState<InsertCampaignUpdate>({
    title: "",
    content: "",
    isPublished: false
  });
  const [editingUpdate, setEditingUpdate] = useState<CampaignUpdate | null>(null);

  const authToken = localStorage.getItem('adminAuth');

  useEffect(() => {
    // Check authentication
    if (!authToken || authToken !== 'upliftproject50k2025$$$$') {
      navigate('/admin-login');
      return;
    }

    setIsAuthenticated(true);
    loadDashboardData();
  }, [authToken, navigate]);

  // Check if we're in development or production
  const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname.includes('replit');
  
  const apiRequest = async (url: string, options: RequestInit = {}) => {
    if (!isDevelopment) {
      // For GitHub Pages (static), use localStorage-based storage
      return handleStaticApiRequest(url, options);
    }
    
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }
    
    return response.json();
  };

  // Handle API requests for static GitHub Pages deployment
  const handleStaticApiRequest = async (url: string, options: RequestInit = {}) => {
    const method = options.method || 'GET';
    
    if (url === '/api/admin/fundraising-progress') {
      if (method === 'GET') {
        const saved = localStorage.getItem('fundraisingProgress');
        return saved ? JSON.parse(saved) : { id: 1, currentAmount: 0, goalAmount: 50000, donorCount: 0 };
      } else if (method === 'PUT') {
        const data = JSON.parse(options.body as string);
        localStorage.setItem('fundraisingProgress', JSON.stringify(data));
        return data;
      }
    }
    
    if (url === '/api/admin/campaign-updates') {
      if (method === 'GET') {
        const saved = localStorage.getItem('campaignUpdates');
        return saved ? JSON.parse(saved) : [];
      } else if (method === 'POST') {
        const updates = JSON.parse(localStorage.getItem('campaignUpdates') || '[]');
        const newUpdate = JSON.parse(options.body as string);
        newUpdate.id = Date.now();
        newUpdate.createdAt = new Date().toISOString();
        updates.push(newUpdate);
        localStorage.setItem('campaignUpdates', JSON.stringify(updates));
        return newUpdate;
      }
    }
    
    if (url.startsWith('/api/admin/campaign-updates/')) {
      const id = parseInt(url.split('/').pop() || '0');
      const updates = JSON.parse(localStorage.getItem('campaignUpdates') || '[]');
      
      if (method === 'PUT') {
        const updateData = JSON.parse(options.body as string);
        const index = updates.findIndex((u: any) => u.id === id);
        if (index !== -1) {
          updates[index] = { ...updates[index], ...updateData };
          localStorage.setItem('campaignUpdates', JSON.stringify(updates));
          return updates[index];
        }
      } else if (method === 'DELETE') {
        const filtered = updates.filter((u: any) => u.id !== id);
        localStorage.setItem('campaignUpdates', JSON.stringify(filtered));
        return { success: true };
      }
    }
    
    throw new Error('API endpoint not found');
  };

  const loadDashboardData = async () => {
    try {
      const [progressData, updatesData] = await Promise.all([
        apiRequest('/api/admin/fundraising-progress'),
        apiRequest('/api/admin/campaign-updates')
      ]);

      if (progressData) {
        setFundraisingProgress(progressData);
        setProgressForm({
          currentAmount: progressData.currentAmount,
          goalAmount: progressData.goalAmount,
          donorCount: progressData.donorCount
        });
      }

      setCampaignUpdates(updatesData || []);
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin-login');
  };

  const updateFundraisingProgress = async () => {
    try {
      const updated = await apiRequest('/api/admin/fundraising-progress', {
        method: 'PUT',
        body: JSON.stringify(progressForm)
      });
      setFundraisingProgress(updated);
    } catch (error) {
      console.error('Failed to update fundraising progress:', error);
    }
  };

  const createCampaignUpdate = async () => {
    try {
      const created = await apiRequest('/api/admin/campaign-updates', {
        method: 'POST',
        body: JSON.stringify(newUpdate)
      });
      setCampaignUpdates([created, ...campaignUpdates]);
      setNewUpdate({ title: "", content: "", isPublished: false });
    } catch (error) {
      console.error('Failed to create campaign update:', error);
    }
  };

  const updateCampaignUpdate = async (id: number, updateData: Partial<InsertCampaignUpdate>) => {
    try {
      const updated = await apiRequest(`/api/admin/campaign-updates/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updateData)
      });
      setCampaignUpdates(campaignUpdates.map(u => u.id === id ? updated : u));
      setEditingUpdate(null);
    } catch (error) {
      console.error('Failed to update campaign update:', error);
    }
  };

  const deleteCampaignUpdate = async (id: number) => {
    try {
      await apiRequest(`/api/admin/campaign-updates/${id}`, {
        method: 'DELETE'
      });
      setCampaignUpdates(campaignUpdates.filter(u => u.id !== id));
    } catch (error) {
      console.error('Failed to delete campaign update:', error);
    }
  };

  if (!isAuthenticated || isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-uplift-red mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center h-auto sm:h-16 py-4">
            <div className="flex items-center mb-4 sm:mb-0">
              <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-uplift-red mr-2 sm:mr-3" />
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                The Uplift Project - Admin
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-gray-600 w-full sm:w-auto justify-start sm:justify-center"
                size="sm"
              >
                View Website
              </Button>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="text-red-600 border-red-600 hover:bg-red-50 w-full sm:w-auto justify-start sm:justify-center"
                size="sm"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="progress" className="space-y-6">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 h-auto sm:h-10">
            <TabsTrigger value="progress" className="flex items-center justify-center py-2 text-sm">
              <DollarSign className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Fundraising Progress</span>
              <span className="sm:hidden">Progress</span>
            </TabsTrigger>
            <TabsTrigger value="updates" className="flex items-center justify-center py-2 text-sm">
              <FileText className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Campaign Updates</span>
              <span className="sm:hidden">Updates</span>
            </TabsTrigger>
          </TabsList>

          {/* Fundraising Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Update Fundraising Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="currentAmount">Current Amount ($)</Label>
                    <Input
                      id="currentAmount"
                      type="number"
                      value={progressForm.currentAmount}
                      onChange={(e) => setProgressForm({
                        ...progressForm,
                        currentAmount: parseInt(e.target.value) || 0
                      })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="goalAmount">Goal Amount ($)</Label>
                    <Input
                      id="goalAmount"
                      type="number"
                      value={progressForm.goalAmount}
                      onChange={(e) => setProgressForm({
                        ...progressForm,
                        goalAmount: parseInt(e.target.value) || 0
                      })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="donorCount">Donor Count</Label>
                    <Input
                      id="donorCount"
                      type="number"
                      value={progressForm.donorCount}
                      onChange={(e) => setProgressForm({
                        ...progressForm,
                        donorCount: parseInt(e.target.value) || 0
                      })}
                    />
                  </div>
                </div>
                <Button onClick={updateFundraisingProgress} className="bg-uplift-red hover:bg-red-700">
                  <Save className="w-4 h-4 mr-2" />
                  Update Progress
                </Button>
              </CardContent>
            </Card>

            {fundraisingProgress && (
              <Card>
                <CardHeader>
                  <CardTitle>Current Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">
                        ${fundraisingProgress.currentAmount.toLocaleString()}
                      </div>
                      <div className="text-sm text-green-700">Raised</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">
                        ${fundraisingProgress.goalAmount.toLocaleString()}
                      </div>
                      <div className="text-sm text-blue-700">Goal</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-purple-600">
                        {fundraisingProgress.donorCount}
                      </div>
                      <div className="text-sm text-purple-700">Donors</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{Math.round((fundraisingProgress.currentAmount / fundraisingProgress.goalAmount) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-uplift-red h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${Math.min((fundraisingProgress.currentAmount / fundraisingProgress.goalAmount) * 100, 100)}%` 
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Campaign Updates Tab */}
          <TabsContent value="updates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Campaign Update</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="updateTitle">Title</Label>
                  <Input
                    id="updateTitle"
                    value={newUpdate.title}
                    onChange={(e) => setNewUpdate({
                      ...newUpdate,
                      title: e.target.value
                    })}
                    placeholder="Update title"
                  />
                </div>
                <div>
                  <Label htmlFor="updateContent">Content</Label>
                  <Textarea
                    id="updateContent"
                    value={newUpdate.content}
                    onChange={(e) => setNewUpdate({
                      ...newUpdate,
                      content: e.target.value
                    })}
                    placeholder="Update content"
                    rows={4}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="updatePublished"
                    checked={newUpdate.isPublished}
                    onCheckedChange={(checked) => setNewUpdate({
                      ...newUpdate,
                      isPublished: checked
                    })}
                  />
                  <Label htmlFor="updatePublished">Publish immediately</Label>
                </div>
                <Button 
                  onClick={createCampaignUpdate} 
                  className="bg-uplift-red hover:bg-red-700"
                  disabled={!newUpdate.title || !newUpdate.content}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Update
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Campaign Updates</h3>
              {campaignUpdates.length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center text-gray-500">
                    No campaign updates yet. Create your first update above.
                  </CardContent>
                </Card>
              ) : (
                campaignUpdates.map((update) => (
                  <Card key={update.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{update.title}</CardTitle>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                            <span>Created: {new Date(update.createdAt).toLocaleDateString()}</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              update.isPublished 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {update.isPublished ? 'Published' : 'Draft'}
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingUpdate(update)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateCampaignUpdate(update.id, {
                              isPublished: !update.isPublished
                            })}
                          >
                            {update.isPublished ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => deleteCampaignUpdate(update.id)}
                            className="text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 whitespace-pre-wrap">{update.content}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Edit Update Modal */}
      {editingUpdate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <Card className="w-full max-w-2xl my-8">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Edit Campaign Update</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="editTitle">Title</Label>
                <Input
                  id="editTitle"
                  value={editingUpdate.title}
                  onChange={(e) => setEditingUpdate({
                    ...editingUpdate,
                    title: e.target.value
                  })}
                />
              </div>
              <div>
                <Label htmlFor="editContent">Content</Label>
                <Textarea
                  id="editContent"
                  value={editingUpdate.content}
                  onChange={(e) => setEditingUpdate({
                    ...editingUpdate,
                    content: e.target.value
                  })}
                  rows={4}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="editPublished"
                  checked={editingUpdate.isPublished}
                  onCheckedChange={(checked) => setEditingUpdate({
                    ...editingUpdate,
                    isPublished: checked
                  })}
                />
                <Label htmlFor="editPublished">Published</Label>
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setEditingUpdate(null)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => updateCampaignUpdate(editingUpdate.id, {
                    title: editingUpdate.title,
                    content: editingUpdate.content,
                    isPublished: editingUpdate.isPublished
                  })}
                  className="bg-uplift-red hover:bg-red-700"
                >
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
