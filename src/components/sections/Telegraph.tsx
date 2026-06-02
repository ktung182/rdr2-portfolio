import { Phone, Mail, Globe } from "lucide-react";

export default function Telegraph() {
  return (
    <div className="flex flex-col space-y-8">
      <h2 className="text-4xl font-bebas text-rdr-text-active uppercase border-b-2 border-rdr-red pb-2 mb-2 inline-block w-max">
        Telegraph Office
      </h2>
      <p className="font-special italic text-gray-400 mb-6">
        Establish communications or request the full dossier...
      </p>

      <div className="flex flex-col space-y-6 bg-black/40 p-8 border border-[#333] rounded">
        
        <div className="flex items-center space-x-4 group">
          <div className="p-3 border border-gray-700 rounded-full group-hover:border-rdr-red group-hover:text-rdr-red transition-colors text-gray-400">
            <Phone size={24} />
          </div>
          <div>
            <p className="font-bebas text-lg text-gray-500 uppercase tracking-widest">Wire Line</p>
            <p className="font-special text-xl text-rdr-text-active">0834 180 205</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 group">
          <div className="p-3 border border-gray-700 rounded-full group-hover:border-rdr-red group-hover:text-rdr-red transition-colors text-gray-400">
            <Mail size={24} />
          </div>
          <div>
            <p className="font-bebas text-lg text-gray-500 uppercase tracking-widest">Postage</p>
            <p className="font-special text-xl text-rdr-text-active">Ngoai Giao Doan, Ha Noi</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 group">
          <div className="p-3 border border-gray-700 rounded-full group-hover:border-rdr-red group-hover:text-rdr-red transition-colors text-gray-400">
            <Globe size={24} />
          </div>
          <div>
            <p className="font-bebas text-lg text-gray-500 uppercase tracking-widest">Network</p>
            <a href="mailto:khanhtungnguyen1802@gmail.com" className="font-special text-xl text-rdr-text-active hover:text-rdr-red transition-colors">
              khanhtungnguyen1802@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center pt-8">
        <a 
          href="/my-data-portfolio/cv_nguyen_khanh_tung.pdf" 
          download
          className="relative group inline-block p-1 bg-[#111]"
        >
          {/* Outer Border */}
          <div className="absolute inset-0 border-2 border-dashed border-gray-600 group-hover:border-rdr-red transition-colors duration-300"></div>
          
          {/* Inner Content */}
          <div className="relative px-8 py-4 border-2 border-gray-600 group-hover:border-rdr-red bg-[#1a1a1a] transition-colors duration-300">
            <span className="block font-bebas text-3xl text-gray-400 group-hover:text-rdr-red transition-colors duration-300 uppercase tracking-widest">
              Download Manifest
            </span>
            
            {/* Stamp Details */}
            <div className="absolute top-1 right-2 opacity-30 text-xs font-mono group-hover:text-rdr-red">
              No. 409
            </div>
            <div className="absolute bottom-1 left-2 opacity-30 text-xs font-mono group-hover:text-rdr-red">
              APPROVED
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
