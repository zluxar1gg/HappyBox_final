const fs = require('fs');
let code = fs.readFileSync('components/AlibabaAdvancedGuide.tsx', 'utf8');

const replacement = `                            )}
                            {(section as any).beyondPlatforms && (
                                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 mb-6 mt-6">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-left">
                                        {(section as any).beyondPlatforms.map((plat: any, i: number) => (
                                            <div key={i} onClick={() => onNavigate && onNavigate(plat.id)} className="bg-[#FF6A00] p-6 rounded-[24px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-transparent cursor-pointer group flex flex-col h-full text-left">
                                                <h4 className="font-bold text-white mb-2 text-lg transition-colors flex items-center gap-2">
                                                    {plat.name}
                                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
                                                </h4>
                                                <p className="text-white/80 font-medium text-sm leading-relaxed">{plat.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {section.afterTable && (
                                        <div className="text-left w-full text-base md:text-lg text-gray-700 font-medium leading-relaxed whitespace-pre-line pt-2">
                                            {section.afterTable}
                                        </div>
                                    )}
                                </div>
                            )}
                            {section.afterTable && !(section as any).beyondPlatforms && (`

code = code.replace("                            )}\n                            {section.afterTable && (", replacement);
fs.writeFileSync('components/AlibabaAdvancedGuide.tsx', code);
console.log("Success");
