export default function ContactCard({ icon: Icon, title, value, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-purple-400/30 hover:border-purple-400/60 transition-all hover:from-blue-500/20 hover:to-purple-500/20 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer">
        
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
          <Icon className="text-white" size={32} />
        </div>

        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        <p className="text-gray-500 hover:text-gray-900 transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
}
