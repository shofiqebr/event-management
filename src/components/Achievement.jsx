

const Achievement = () => {
    return (
        <div >
            <div className="text-center text-5xl font-bold py-10">
                Achievements
            </div>
        <div className="flex lg:gap-10 lg:mx-10 flex-col lg:flex-row gap-5">
          <div>
          <div><img className="w-96 h-80" src="https://i.ibb.co/5Kd0wH4/achievement-4548538-640.webp" alt="" /></div>
            <p>Top level strtup</p>
          </div>

          <div><img className="w-96  h-80" src="https://i.ibb.co/Zxw0Jv1/istockphoto-1347499538-612x612.jpg" alt="" />
            <p>Global Award</p>
          </div>

          <div><img className="w-96 h-80" src="https://i.ibb.co/mCzX12D/stock-vector-golden-badge-with-achievement-written-on-it-vector-2144710837.jpg" alt="" />
            <p>Certification</p>
          
          </div>
        </div>
        </div>
    );
};

export default Achievement;
