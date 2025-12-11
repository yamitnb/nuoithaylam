import React from 'react';
import { Check, Zap, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const thankYouMessages = React.useMemo(
    () => [
      'Cảm ơn bạn rất nhiều vì đã giúp đỡ mình!',
      'Mình thật sự biết ơn sự hỗ trợ của bạn.',
      'Cảm ơn bạn đã dành thời gian cho mình.',
      'Chân thành cảm ơn vì tất cả những gì bạn đã làm.',
      'Mình vô cùng trân trọng sự quan tâm và động viên của bạn.',
      'Cảm ơn bạn đã kiên nhẫn lắng nghe.',
      'Nhờ có bạn, mọi việc trở nên dễ dàng hơn, cảm ơn nhé.',
      'Cảm ơn bạn đã xuất hiện đúng lúc mình cần.',
      'Mình rất biết ơn vì sự tin tưởng bạn dành cho mình.',
      'Cảm ơn bạn đã mang đến cho mình nhiều năng lượng tích cực.',
      'Rất cảm kích vì bạn luôn ở bên cạnh mình.',
      'Cảm ơn bạn đã sẻ chia và đồng hành.',
      'Lời khuyên của bạn thật hữu ích, cảm ơn nhiều!',
      'Cảm ơn bạn đã giúp mình vượt qua giai đoạn khó khăn.',
      'Mình biết ơn sự tử tế và hào phóng của bạn.',
      'Cảm ơn bạn đã truyền cảm hứng cho mình.',
      'Sự giúp đỡ của bạn khiến mình cảm thấy ấm lòng, cảm ơn!',
      'Mình trân trọng từng chút đóng góp của bạn, cảm ơn nhé.',
      'Cảm ơn bạn đã làm mình cảm thấy được quan tâm.',
      'Nhờ có bạn, mọi thứ tốt đẹp hơn nhiều, cảm ơn bạn!',
    ],
    []
  );
  const [thankYou, setThankYou] = React.useState<string | null>(null);
  const accountNumber = '1801958888';
  const [copied, setCopied] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const handleThankYouClick = () => {
    const msg = thankYouMessages[Math.floor(Math.random() * thankYouMessages.length)];
    setThankYou(msg);
  };

  const handleCopyAccount = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  React.useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const ua = navigator.userAgent.toLowerCase();
      setIsMobile(/iphone|ipad|ipod|android|windows phone|blackberry|mobile/.test(ua));
    }
  }, []);

  const qrLink = 'vietqr://pay?ba=1801958888@tcb';

  const handleQrClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobile) {
      e.preventDefault();
    }
  };

  return (
    <section id="scan-section" className="relative py-12 lg:py-24 overflow-hidden">
      {/* Background Blobs - Light Theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-60">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-orange-300/30 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-teal-300/30 rounded-full blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-purple-300/30 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Trạng thái: Đang rất đói
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Donate bữa ăn <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                nhận ngàn niềm vui.
              </span>
            </h2>

            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
              Không thủ tục, không giấy tờ. Chỉ có tấm lòng vàng và một chiếc bụng đang chờ ting ting.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Mục tiêu ngày</div>
                  <div className="text-2xl font-bold text-slate-900">200.000đ</div>
                  <div className="w-full bg-slate-100 h-1.5 mt-2 rounded-full overflow-hidden">
                     <div className="bg-orange-500 h-full w-[40%] rounded-full" />
                  </div>
               </div>
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Tổng Donate</div>
                  <div className="text-2xl font-bold text-slate-900">12.3 Tr</div>
                  <div className="text-xs text-green-600 font-bold mt-1 flex items-center gap-1">
                     <Zap size={12} fill="currentColor" /> +12% tuần này
                  </div>
               </div>
            </div>

            <div className="flex gap-4 text-sm font-semibold text-slate-500">
              <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-teal-500" /> Uy tín 100%</span>
              <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-teal-500" /> Review code 0đ</span>
            </div>
          </div>

          {/* Right Card (QR) */}
          <div className="lg:pl-10 relative">
             {/* Decorative elements behind card */}
             <div className="absolute top-10 -right-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-400 rounded-full opacity-20 blur-2xl" />

            <div className="bg-white rounded-[2.5rem] p-2 shadow-2xl shadow-slate-200/50 transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-slate-100">
              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 overflow-hidden relative">
                 <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 opacity-10" />
                 
                 <div className="relative z-10 text-center mb-8">
                    <h3 className="text-slate-900 font-bold text-lg">Cổng Tiếp Tế Lương Thực</h3>
                    <p className="text-slate-500 text-sm">(Hỗ trợ mọi ngân hàng qua VietQR)</p>
                 </div>

                 {/* QR Area - Using VietQR API */}
                 <a
                   href={isMobile ? qrLink : '#'}
                   onClick={handleQrClick}
                   className="block mx-auto w-full max-w-[280px] bg-white p-4 rounded-3xl shadow-lg mb-8 relative group"
                   title="Thanh toán ngay qua VietQR"
                 >
                    <div className="absolute inset-0 rounded-3xl border-2 border-blue-100 group-hover:border-blue-300 transition-colors pointer-events-none" />
                    <img 
                      src="https://img.vietqr.io/image/TCB-1801958888-print.png?amount=&addInfo=Nuoi%20Toi&accountName=PHAM%20THANH%20LAM"
                      alt="VietQR TechcomBank"
                      className="w-full h-auto rounded-xl object-contain"
                    />
                    <p className="mt-3 text-center text-xs text-slate-500 font-medium">
                      {isMobile
                        ? 'Dùng điện thoại: ấn vào ảnh để mở app VietQR (không kèm số tiền)'
                        : 'Vui lòng quét QR trên máy tính, còn điện thoại bấm ảnh sẽ mở app VietQR'}
                    </p>
                 </a>

                 <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 mb-6">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-xs text-slate-400 font-bold uppercase">Người thụ hưởng</span>
                       <span className="text-sm font-bold text-slate-800">PHẠM THANH LÂM</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-xs text-slate-400 font-bold uppercase">TECHCOMBANK</span>
                       <div className="flex items-center gap-2">
                         <span className="text-sm font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                           {accountNumber}
                         </span>
                         <button
                           type="button"
                           onClick={handleCopyAccount}
                           className="text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg px-2 py-1 transition-colors"
                         >
                           {copied ? 'Đã copy' : 'Copy'}
                         </button>
                       </div>
                    </div>
                 </div>

                <button
                  onClick={handleThankYouClick}
                  className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5 text-green-400" /> Đã chuyển khoản xong
                </button>
                {thankYou && (
                  <div className="mt-4 text-center text-sm font-semibold text-slate-700 bg-slate-100/80 border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
                    {thankYou}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};