import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full">
      {/* Left side - Image */}
      <div className="hidden md:block md:w-[65%] relative bg-gradient-to-br from-blue-100 to-white">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent z-10"></div>
        {/* Using local image from public folder */}
        <div className="absolute inset-0">
          <Image 
            src="/1_1.png" 
            alt="Students working at desks by a window"
            width={1200}
            height={800}
            className="w-full h-full object-cover object-left"
            priority
          />
        </div>
      </div>
      
      {/* Right side - Login form */}
      <div className="w-full md:w-[41%] flex flex-col bg-white">
        {/* Form content with shadow and rounded corners */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8" style={{ boxShadow: '0px 4px 4px -2px rgba(0, 0, 0, 0.3), 4px 0px 4px -2px rgba(0, 0, 0, 0.3), 0px -4px 4px -2px rgba(0, 0, 0, 0.3), -4px 0px 4px -2px rgba(0, 0, 0, 0.3)' }}>
            <div className="text-left">
              <h1 className="text-4xl font-light bg-gradient-to-br from-[#B4C0C8] to-[#233645] bg-clip-text text-transparent">RAISE</h1>
              <div className="text-red-500 text-base">
                <p className="font-bold text-lg text-[#788791]">by</p> 
                <span className="font-bold text-2xl">Matrix Consulting</span>
              </div>
            </div>
            
            <div className="text-center mt-6 mb-6">
              <p className="text-gray-700 font-bold text-3xl">¡Te damos la bienvenida a nuestro sistema!</p>
              <p className="text-sm text-gray-500 mt-2">Ingresa tus datos para acceder</p>
            </div>
            
            <form className="space-y-4 text-center">
              <div>
                <input 
                  type="email" 
                  placeholder="Email / Usuario" 
                  className="w-3/4 p-2 text-[#8997A0] border border-gray-300 rounded-full"
                />
              </div>
              <div>
                <input 
                  type="password" 
                  placeholder="Contraseña" 
                  className="w-3/4 p-2 text-[#8997A0] border border-gray-300 rounded-full"
                />
              </div>
              <button 
                type="submit" 
                className="w-3/4 py-2.5 bg-[#9B2341] text-white rounded-full hover:bg-red-700 transition-colors"
              >
                Iniciar sesión
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>o</p>
            </div>
            
            <div className="mt-4 space-y-2">
              <button className="w-full py-2.5 border border-gray-300 rounded-full flex items-center justify-center gap-2 text-black">
                <img src="/Microsoft.png" alt="Microsoft Logo" className="h-4" />
                Iniciar sesión con Microsoft
              </button>
              <button className="w-full py-2.5 border border-gray-300 rounded-full flex items-center justify-center gap-2 text-black">
                <img src="/Google.png" alt="Google Logo" className="h-4" />
                Iniciar sesión con Google
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer with dark background (moved from top to bottom) */}
        <div className="w-full h-[40px] bg-[#233746]"></div>
      </div>
    </div>
  );
}