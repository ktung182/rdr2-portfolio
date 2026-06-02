export default function TheJournal() {
  return (
    <div className="flex flex-col space-y-8 text-lg font-special text-rdr-text leading-relaxed">
      <div>
        <h2 className="text-4xl font-bebas text-rdr-text-active uppercase border-b-2 border-rdr-red pb-2 mb-4 inline-block">
          Nguyen Khanh Tung
        </h2>
        <p className="text-xl text-rdr-red font-semibold italic">Data & Business Analytics</p>
      </div>

      <div className="space-y-4">
        <p>
          I am a dedicated Data & Business Analytics professional who seeks to uncover
          the truth hidden within the ledgers and data trails of the modern world.
          Like a seasoned tracker, I trace the patterns of information to guide strategic
          decisions and uncover valuable insights.
        </p>
        <p>
          My approach combines rigorous quantitative analysis with a keen understanding
          of the socioeconomic landscapes that shape our environment.
        </p>
      </div>

      <div className="pt-6 border-t border-gray-700/50">
        <h3 className="text-2xl font-bebas text-rdr-text-active uppercase mb-3">Education</h3>
        <div className="bg-black/30 p-6 rounded-md border border-gray-800">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-xl font-bold text-rdr-text-active">Foreign Trade University</h4>
              <p className="italic text-gray-400">Bachelor's Degree</p>
            </div>
            <div className="text-right">
              <span className="font-bebas text-2xl text-rdr-red">3.46</span>
              <span className="text-sm text-gray-500"> / 4.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
