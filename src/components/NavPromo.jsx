import { useEffect, useState } from "react";

const NavPromo = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsHidden(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer div that takes up space when NavPromo is visible */}
      <div className={`h-10 ${isHidden ? "hidden" : "block"} mt-2`} />

      <div
        className={`fixed w-full bg-primary text-white transition-transform duration-300 z-40 ${
          isHidden ? "-translate-y-full" : "translate-y-24"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center h-10 overflow-hidden">
          <div className="font-semibold whitespace-nowrap px-4 -ml-4 border-r border-white/20">
            <span className="hidden sm:inline">Current Retail Selling Price (Inclusive VAT)</span>
          </div>
          <div className="flex-1 relative overflow-hidden">
            <div className="flex whitespace-nowrap animate-slower-scroll">
              <div className="flex items-center space-x-8 px-4">
                {[
                  {
                    location: "Kathmandu",
                    petrol: 165.0,
                    diesel: 153.0,
                    kerosene: 153.0,
                    aviationFuel: 132.0,
                    gas: 1910.0,
                  },
                  {
                    location: "Mahendranagar",
                    petrol: 166.0,
                    diesel: 154.0,
                    kerosene: 154.0,
                    aviationFuel: 133.0,
                    gas: 1920.0,
                  },
                  {
                    location: "Birgunj",
                    petrol: 165.0,
                    diesel: 153.0,
                    kerosene: 153.0,
                    aviationFuel: 132.0,
                    gas: 1910.0,
                  },
                  {
                    location: "Amlekhjung",
                    petrol: 165.5,
                    diesel: 153.5,
                    kerosene: 153.5,
                    aviationFuel: 132.0,
                    gas: 1910.0,
                  },
                  {
                    location: "Bhalbari",
                    petrol: 165.5,
                    diesel: 153.5,
                    kerosene: 153.5,
                    aviationFuel: 132.0,
                    gas: 1910.0,
                  },
                  {
                    location: "Nepalgung",
                    petrol: 165.5,
                    diesel: 153.5,
                    kerosene: 153.5,
                    aviationFuel: 132.0,
                    gas: 1910.0,
                  },
                  {
                    location: "Dhangadi",
                    petrol: 165.5,
                    diesel: 153.5,
                    kerosene: 153.5,
                    aviationFuel: 132.0,
                    gas: 1910.0,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-8 px-4">
                    <span className="font-normal text-yellow-300">
                      {item.location}
                    </span>
                    <span>Petrol(MS): NRs {item.petrol}/L</span>
                    <span>Diesel(HSD): NRs {item.diesel}/L</span>
                    <span>Kerosene(SKO): NRs {item.kerosene}/L</span>
                    <span>
                      Aviation Turbine Fuel(Jet A-1): NRs {item.aviationFuel}/L
                    </span>
                    <span>LP Gas: NRs {item.gas}/cyl</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavPromo;