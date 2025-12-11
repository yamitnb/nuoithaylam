import React from 'react';
import { Feather } from 'lucide-react';

export const PoemSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-4 text-orange-500">
             <Feather size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 font-serif">
            Khẩn Cầu Được Nuôi
          </h2>
          <p className="text-slate-500 mt-2">
            (Một phút ngẫu hứng văn thơ lúc bụng đói)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-soft border border-slate-100 relative group hover:shadow-xl transition-shadow duration-300">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-200 to-slate-300 group-hover:from-orange-400 group-hover:to-pink-500 transition-all duration-500" />
             
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 border-b border-slate-100 pb-4">Nguyên Tác Hán Văn</h3>
            
            <div className="space-y-6 font-serif text-slate-700 text-lg leading-relaxed text-center">
              <div className="hover:text-orange-600 transition-colors cursor-default">
                <p className="font-bold text-xl mb-1">飢骨常寒立暮風</p>
                <p className="text-sm text-slate-400 italic font-sans">Cơ cốt thường hàn lập mộ phong</p>
              </div>
              <div className="hover:text-orange-600 transition-colors cursor-default">
                <p className="font-bold text-xl mb-1">三分氣力已難中</p>
                <p className="text-sm text-slate-400 italic font-sans">Tam phân khí lực dĩ nan trung</p>
              </div>
              <div className="hover:text-orange-600 transition-colors cursor-default">
                <p className="font-bold text-xl mb-1">苦夜編程燈影搖</p>
                <p className="text-sm text-slate-400 italic font-sans">Khổ dạ biên trình đăng ảnh dao</p>
              </div>
              <div className="hover:text-orange-600 transition-colors cursor-default">
                <p className="font-bold text-xl mb-1">曉晨啜粥夢魂消</p>
                <p className="text-sm text-slate-400 italic font-sans">Hiểu thần xuyết chúc mộng hồn tiêu</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fffcf5] p-8 md:p-10 rounded-2xl shadow-soft border border-orange-100 relative group hover:shadow-xl transition-shadow duration-300">
             {/* Paper texture effect */}
             <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
                <Feather className="w-full h-full text-orange-900" />
             </div>
             
            <h3 className="text-sm font-bold text-orange-800/60 uppercase tracking-widest mb-8 border-b border-orange-200/50 pb-4">Dịch Nghĩa (Lục Bát)</h3>
            
            <div className="space-y-8 text-slate-800 font-serif text-lg leading-loose pl-4 border-l-4 border-orange-200">
              <div>
                <p>Cốt đói thân run giữa gió chiều,</p>
                <p>Khí lực còn ba, gượng chẳng nhiều.</p>
                <p>Đêm code khổ cực, đèn lay bóng,</p>
                <p>Sáng sớm húp cháo, giấc mơ tiêu.</p>
              </div>
              
              <div className="pt-4">
                <p>Nếu người rủ chút lòng vô tận,</p>
                <p>Cho kẻ phong trần bớt thiếu nhiều.</p>
                <p>Ơn ấy ghi lòng, đâu dám phụ,</p>
                <p>Hôm gặp lại nhau, cười nhoẻn yêu.</p>
              </div>
            </div>
            
            <div className="mt-8 text-right">
               <span className="text-sm font-bold text-orange-500 font-sans">—— Tác giả: Bụng Đói ——</span>
            </div>
          </div>

          {/* Card 3 - Tứ tuyệt */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-soft border border-slate-100 relative group hover:shadow-xl transition-shadow duration-300">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-200 to-slate-300 group-hover:from-teal-400 group-hover:to-blue-500 transition-all duration-500" />
             
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8 border-b border-slate-100 pb-4">Tứ tuyệt (Hán - Việt)</h3>
            
            <div className="space-y-4 font-serif text-slate-800 text-lg leading-relaxed text-center">
              <p className="font-bold text-xl">飢骨侵衣暮冷風</p>
              <p className="text-sm text-slate-500 italic font-sans">Giai cốt xâm y mộ lãnh phong</p>
              <p className="font-bold text-xl">三分氣力勉能中</p>
              <p className="text-sm text-slate-500 italic font-sans">Tam phân khí lực miễn năng trung</p>
              <p className="font-bold text-xl">苦燈編碼孤身影</p>
              <p className="text-sm text-slate-500 italic font-sans">Khổ đăng biên mã cô thân ảnh</p>
              <p className="font-bold text-xl">薄粥天曉夢魂空</p>
              <p className="text-sm text-slate-500 italic font-sans">Bạc chúc thiên hiểu mộng hồn không</p>
            </div>
          </div>

          {/* Card 4 - Song thất lục bát */}
          <div className="bg-[#f6fbff] p-8 md:p-10 rounded-2xl shadow-soft border border-blue-100 relative group hover:shadow-xl transition-shadow duration-300">
             <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
                <Feather className="w-full h-full text-blue-900" />
             </div>
             
            <h3 className="text-sm font-bold text-blue-800/60 uppercase tracking-widest mb-8 border-b border-blue-200/50 pb-4">Song thất lục bát</h3>
            
            <div className="space-y-6 text-slate-800 font-serif text-lg leading-loose pl-4 border-l-4 border-blue-200">
              <div>
                <p>Gió chiều hun hút xương run,</p>
                <p>Ba phần khí lực, gượng cầm bàn phím.</p>
                <p>Đêm code đèn lắc bóng chìm,</p>
                <p>Sáng ra bát cháo, mộng tìm cũng tan.</p>
              </div>
              <div className="pt-2">
                <p>Nếu ai rủ chút thương chan,</p>
                <p>Đỡ cho kẻ đói phong trần bớt thiếu.</p>
                <p>Ơn này xin giữ nguyên nhiều,</p>
                <p>Mai kia gặp lại, nhoẻn cười thật hiền.</p>
              </div>
            </div>
          </div>

          {/* Card 5 - Lục bát (biến thể) */}
          <div className="bg-[#fff7fb] p-8 md:p-10 rounded-2xl shadow-soft border border-pink-100 relative group hover:shadow-xl transition-shadow duration-300">
             <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
                <Feather className="w-full h-full text-pink-900" />
             </div>
             
            <h3 className="text-sm font-bold text-pink-800/60 uppercase tracking-widest mb-8 border-b border-pink-200/50 pb-4">Lục bát (biến thể)</h3>
            
            <div className="space-y-6 text-slate-800 font-serif text-lg leading-loose pl-4 border-l-4 border-pink-200">
              <div>
                <p>Gió chiều xương lạnh đứng run,</p>
                <p>Ba phần hơi sức, gượng vần code đêm.</p>
                <p>Đèn chao bóng ngả bên thềm,</p>
                <p>Sớm mai húp cháo, mộng mềm tan phơi.</p>
              </div>
              <div className="pt-2">
                <p>Ai thương nhắn gửi đôi lời,</p>
                <p>Cho người lận đận vơi thời thiếu ăn.</p>
                <p>Ơn này ghi dạ không ngăn,</p>
                <p>Hôm sau gặp nhé, nụ cười trao nhau.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};