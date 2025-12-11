import React from 'react';
import { Donor } from '../types';
import { Star } from 'lucide-react';

const donors: Donor[] = [
  { id: 1, name: 'Ngân Trương', amount: 5000000, message: 'CUSTOMER TRUONG THI NGAN CHUYEN TIEN.' },
  { id: 2, name: 'Chu Tú Quyên', amount: 100000, message: 'CHU TU QUYEN CHUYEN TIEN.' },
  { id: 3, name: 'Ẩn danh', amount: 500000, message: '“Ăn đi”' },
  { id: 4, name: 'Người lạ', amount: 20000, message: '“Test thử cảm giác làm người nuôi.”' },
];

export const DonationTable: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 flex items-center justify-center gap-2">
            <Star className="text-yellow-400 fill-yellow-400" /> Bảng vàng danh dự
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Ghi danh những nhà hảo tâm đã giúp tôi vượt qua cơn đói lúc 2 giờ sáng.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden ring-4 ring-slate-50">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="py-5 px-6 font-bold text-slate-400 text-xs uppercase tracking-wider w-20">#</th>
                  <th className="py-5 px-6 font-bold text-slate-400 text-xs uppercase tracking-wider">Nhà hảo tâm</th>
                  <th className="py-5 px-6 font-bold text-slate-400 text-xs uppercase tracking-wider text-right">Số tiền</th>
                  <th className="py-5 px-6 font-bold text-slate-400 text-xs uppercase tracking-wider">Lời nhắn gửi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {donors.map((donor, index) => (
                  <tr key={donor.id} className="hover:bg-orange-50/30 transition-colors group">
                    <td className="py-5 px-6 text-slate-400 font-bold">
                       {index === 0 ? '🥇' : (index + 1).toString().padStart(2, '0')}
                    </td>
                    <td className="py-5 px-6">
                       <span className="font-bold text-slate-700 group-hover:text-orange-600 transition-colors">
                          {donor.name}
                       </span>
                    </td>
                    <td className="py-5 px-6 text-right">
                       <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          donor.amount >= 500000 ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
                       }`}>
                          {donor.amount.toLocaleString('vi-VN')}đ
                       </span>
                    </td>
                    <td className="py-5 px-6 text-slate-500 italic text-sm">
                      "{donor.message}"
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-500 font-medium">
             Dữ liệu được cập nhật thủ công (khi tôi rảnh)
          </div>
        </div>
      </div>
    </section>
  );
};