import React, { useState } from 'react';
import { products, mockOrders, mockStats } from '../data';
import {
  BarChart3,
  Package,
  ShoppingBag,
  Users,
  Plus,
  MoreVertical,
  Edit2,
  Trash2,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('products');

  const stats = [
    { name: 'Total Revenue', value: `$${mockStats.totalRevenue.toLocaleString()}`, icon: BarChart3, change: '+12.5%', trend: 'up' },
    { name: 'Total Orders', value: mockStats.totalOrders, icon: ShoppingBag, change: '+5.2%', trend: 'up' },
    { name: 'Active Products', value: mockStats.totalProducts, icon: Package, change: '0%', trend: 'neutral' },
    { name: 'Active Customers', value: mockStats.activeUsers.toLocaleString(), icon: Users, change: '+2.4%', trend: 'up' },
  ];

  return (
    <div className="bg-primary-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-primary-900 mb-3 tracking-tight">Admin Dashboard</h1>
            <p className="text-primary-500 font-medium">Comprehensive overview of your store's performance and operations.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-primary-900 border-2 border-primary-100 px-8 py-3 rounded-2xl font-bold hover:bg-primary-100 transition-all shadow-sm">
              Export Report
            </button>
            <button className="bg-primary-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-primary-800 transition-all flex items-center gap-2 shadow-lg">
              <Plus className="h-5 w-5" /> New Product
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white p-8 rounded-[32px] shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-primary-50 rounded-2xl">
                  <stat.icon className="h-6 w-6 text-primary-900" />
                </div>
                <div className={`flex items-center text-xs font-bold px-3 py-1.5 rounded-full ${
                  stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-primary-100 text-primary-600'
                }`}>
                  {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <TrendingUp className="h-3 w-3 mr-1" />}
                  {stat.change}
                </div>
              </div>
              <p className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2">{stat.name}</p>
              <p className="text-3xl font-bold text-primary-900 tracking-tight">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="flex border-b-2 border-primary-100 mb-10 overflow-x-auto custom-scrollbar">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-8 py-4 font-bold text-sm transition-all border-b-2 -mb-[2px] whitespace-nowrap ${
              activeTab === 'products' ? 'border-primary-900 text-primary-900' : 'border-transparent text-primary-400 hover:text-primary-600'
            }`}
          >
            Product Catalog
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-8 py-4 font-bold text-sm transition-all border-b-2 -mb-[2px] whitespace-nowrap ${
              activeTab === 'orders' ? 'border-primary-900 text-primary-900' : 'border-transparent text-primary-400 hover:text-primary-600'
            }`}
          >
            Recent Orders
          </button>
        </div>

        <div className="bg-white rounded-[40px] shadow-sm border border-primary-100 overflow-hidden">
          {activeTab === 'products' ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-primary-50/50 text-[10px] font-bold text-primary-400 uppercase tracking-[0.2em]">
                  <tr>
                    <th className="px-10 py-6">Product Details</th>
                    <th className="px-10 py-6">Category</th>
                    <th className="px-10 py-6">Price</th>
                    <th className="px-10 py-6">Status</th>
                    <th className="px-10 py-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-50">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-primary-50/30 transition-colors group">
                      <td className="px-10 py-6">
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-primary-50 flex-shrink-0">
                            <img src={product.image} className="w-full h-full object-cover" alt="" />
                          </div>
                          <span className="font-bold text-primary-900 group-hover:text-primary-600 transition-colors">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-10 py-6 text-primary-500 font-medium text-sm">{product.category}</td>
                      <td className="px-10 py-6 font-bold text-primary-900">${product.price}</td>
                      <td className="px-10 py-6">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-wider">Active</span>
                      </td>
                      <td className="px-10 py-6 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="p-2.5 hover:bg-primary-50 rounded-xl transition-colors text-primary-400 hover:text-primary-900"><Edit2 className="h-4 w-4" /></button>
                          <button className="p-2.5 hover:bg-primary-50 rounded-xl transition-colors text-primary-400 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-primary-50/50 text-[10px] font-bold text-primary-400 uppercase tracking-[0.2em]">
                  <tr>
                    <th className="px-10 py-6">ID</th>
                    <th className="px-10 py-6">Customer</th>
                    <th className="px-10 py-6">Date</th>
                    <th className="px-10 py-6">Total</th>
                    <th className="px-10 py-6">Status</th>
                    <th className="px-10 py-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-50">
                  {mockOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-primary-50/30 transition-colors group">
                      <td className="px-10 py-6 font-mono text-[11px] font-bold text-primary-400 tracking-tighter">{order.id}</td>
                      <td className="px-10 py-6">
                        <div className="text-sm">
                          <p className="font-bold text-primary-900 mb-0.5">{order.customer.name}</p>
                          <p className="text-primary-400 text-xs font-medium">{order.customer.email}</p>
                        </div>
                      </td>
                      <td className="px-10 py-6 text-primary-500 text-sm font-medium">{order.date}</td>
                      <td className="px-10 py-6 font-bold text-primary-900">${order.total}</td>
                      <td className="px-10 py-6">
                        <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${
                          order.status === 'shipped' ? 'bg-blue-100 text-blue-700' : order.status === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-10 py-6 text-right">
                        <button className="p-2.5 hover:bg-primary-50 rounded-xl transition-colors text-primary-400 hover:text-primary-900">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
