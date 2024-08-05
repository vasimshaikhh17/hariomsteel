import gaskets from "../../assets/productImages/gaskates.png";
import flanges from "../../assets/productImages/flanges.png";
import fasteners from "../../assets/productImages/fastners.png";
import pipetubefitting from "../../assets/productImages/pipetubefitting.png";


import pipes from "../../assets/productImages/pipes.png";
// import gaskets from "../../assets/productImages/gaskates.png";
// import flanges from "../../assets/productImages/flanges.png";
// import fastners from "../../assets/productImages/fastners.png";
import plates from "../../assets/productImages/plates.png";
import roundbars from "../../assets/productImages/roundbars.png";

// import pipetubefitting from "../../assets/productImages/pipetubefitting.png";
export const categories = [
  {
    _id: "1",
    title: "Home",
    page: "/",
  },
  {
    _id: "2",
    title: "About",
    page: "/about-us",
  },
  {
    _id: "3",
    title: "Products",
    page: "/products",
    sub_category: [
      {
        _id: "3d",
        title: "Fittings",
        page: "/fittings",
        imageSrc: pipetubefitting,
        sub_sub_category: [
          {
            _id: "3d1",
            title: "Forged / Threaded Fitting",
            page: "/forged-threaded-fitting",
            sub_3: [
              { _id: "3d11", title: "45 Degree Elbow", page: "/45-degree-elbow" },
              { _id: "3d12", title: "90 Degree Elbow", page: "/90-degree-elbow" },
              { _id: "3d13", title: "Cross", page: "/cross" },
              { _id: "3d14", title: "Coupling", page: "/coupling" },
              { _id: "3d16", title: "Union", page: "/union" },
              { _id: "3d17", title: "Adapters", page: "/adapters" },
              { _id: "3d18", title: "Bushing", page: "/bushing" },
              { _id: "3d19", title: "Hex Nipple", page: "/hex-nipple" },
            ],
          },
          {
            _id: "3d2",
            title: "Buttweld Fitting",
            page: "/buttweld-fittings",
            sub_3: [
              { _id: "3d21", title: "45 Degree Elbow", page: "/buttweld-45-degree-elbow" },
              { _id: "3d22", title: "90 Degree Elbow", page: "/buttweld-90-degree-elbow" },
              { _id: "3d23", title: "180 Degree Elbow", page: "/buttweld-180-degree-elbow" },
              { _id: "3d24", title: "Equal Tee", page: "/equal-tee" },
              { _id: "3d25", title: "Reducing Tee", page: "/reducing-tee" },
              { _id: "3d26", title: "Concentric Reducers", page: "/concentric-reducers" },
              { _id: "3d27", title: "Eccentric Reducers", page: "/eccentric-reducers" },
              { _id: "3d28", title: "End Caps", page: "/end-caps" },
              { _id: "3d29", title: "Stubend", page: "/stub-end" },
            ],
          },
          {
            _id: "3d3",
            title: "Olets",
            page: "/olets-fittings",
            sub_3: [
              { _id: "3d31", title: "Sock Olets", page: "/sockolets" },
              { _id: "3d32", title: "Weld Olets", page: "/weldolets" },
              { _id: "3d33", title: "Thread Olets", page: "/threadolets" },
              { _id: "3d34", title: "Laterolet", page: "/laterolets" },
              { _id: "3d35", title: "Sweepolet", page: "/sweepolets" },
              { _id: "3d36", title: "Nippolet", page: "/nippolets" },
              { _id: "3d37", title: "Elbolet", page: "/elbolets" },
            ],
          },
        ],
        
      },
      {
        _id: "3b",
        title: "Flanges",
        page: "/flanges",
        imageSrc: flanges,
        sub_sub_category: [
          { _id: "3b1", title: "Slip On Flanges", page: "/slip-on-flanges" },
          { _id: "3b2", title: "Weld Neck Flanges", page: "/weld-neck-flanges" },
          { _id: "3b3", title: "Blind Flanges", page: "/blind-flanges" },
          { _id: "3b4", title: "Socket Weld Flanges", page: "/socket-weld-flanges" },
          { _id: "3b6", title: "Ring Type Joint Flanges", page: "/ring-type-joint-flanges" },
          { _id: "3b7", title: "AWWA Flanges", page: "/awwwa-flanges" },
          { _id: "3b8", title: "Reducing Flanges", page: "/reducing-flanges" },
          { _id: "3b9", title: "Spectacle Flanges", page: "/spectacle-flanges" },
          { _id: "3b10", title: "Long Weld Neck Flange", page: "/long-weld-neck-flanges" },
          { _id: "3b11", title: "Lap Joint Flange", page: "/lap-joint-flanges" },
          // { _id: "3b5", title: "Orifice Flanges", page: "/orifice-flanges" },
          // { _id: "3b12", title: "Spade Blind Flange", page: "/spade-blind-flanges" },
          // { _id: "3b13", title: "Spacer Flange", page: "/spacer-flanges" },
          // { _id: "3b14", title: "Body Flange", page: "/body-flanges" },
          // { _id: "3b15", title: "Nipo Flange", page: "/nipo-flanges" },
        ],
        
      },
      {
        _id: "3c",
        title: "Fasteners",
        page: "/fastners",
        imageSrc: fasteners,
        sub_sub_category: [
          {
            _id: "3c1",
            title: "Bolts",
            page: "/bolts",
            sub_3: [
              { _id: "3c11", title: "Hex Bolt", page: "/hex-bolts" },
              { _id: "3c12", title: "Anchor Bolt", page: "/anchor-bolts" },
              { _id: "3c13", title: "Studs Bolt", page: "/stud-bolts" },
              { _id: "3c14", title: "Foundation Bolt", page: "/foundation-bolts" },
            ],
          },
          {
            _id: "3c2",
            title: "Nuts",
            page: "/nuts",
            sub_3: [
              { _id: "3c21", title: "Hex Nuts", page: "/hex-nuts" },
              { _id: "3c22", title: "Heavy Hex Nuts", page: "/heavy-hex-nuts" },
              { _id: "3c23", title: "Lock Nuts", page: "/lock-nuts" },
              { _id: "3c24", title: "Castle Nuts", page: "/castel-nuts" },
              { _id: "3c25", title: "Flange Nuts", page: "/flange-nuts" },
            ],
          },
          {
            _id: "3c3",
            title: "Washers",
            page: "/washers",
            sub_3: [
              { _id: "3c31", title: "Standard Washers", page: "/standard-washers" },
              { _id: "3c32", title: "Spring Washers", page: "/spring-washers" },
              { _id: "3c33", title: "HV Washers", page: "/hv-washers" },
            ],
          },
          { _id: "3c4", title: "Plugs", page: "/header-plug" },
        ],
        
      },
      {
        _id: "3f",
        title: "Gaskets",
        page: "/gaskets",
        imageSrc: gaskets,
        sub_sub_category: [
          { _id: "3f11", title: "Spiral Wound Gasket", page: "/spiral-wound" },
          { _id: "3f12", title: "Ring Joint Gasket", page: "/ring-joint" },
          { _id: "3f13", title: "Non Metallic Gasket", page: "/non-metallic"  },
          { _id: "3f14", title: "Metallic Gasket", page: "/metallic"},
        ],
      },
    ],
  },
  {
    _id: "4",
    title: "Gallery",
    page: "/gallery",
  },
  {
    _id: "5",
    title: "Materials",
    page: "/materials",
    sub_category: [
      {
        _id: "5aaa",
        title: "Alloy Steel",
        page: "/materials-alloy-steel",
      },
      {
        _id: "5b",
        title: "Stainless Steel",
        page: "/materials-stainless-steel",
      },
      {
        _id: "5c",
        title: "Carbon Steel",
        page: "/materials-carbon-steel",
      },
      {
        _id: "5d",
        title: "Duplex Steel",
        page: "/materials-duplex-steel",
      },
      {
        _id: "5a",
        title: "Exotic Materials",
        page: "/materials-exotic-steel",
      },
    ],
  },

  {
    _id: "93",
    title: "Others",
    page: "/stainless-steel-pipes",

    sub_category: [
      {
        _id: "93a",
        title: "Pipes/Tubes",
        imageSrc: pipes,
        page: "/stainless-steel-pipes",
        sub_sub_category: [
          { _id: "93a1", title: "Stainless Steel Pipes", page: "/stainless-steel-pipes" },
          { _id: "93a2", title: "Duplex / Super Duplex Pipes", page: "/duplex-super-duplex-pipes" },
          { _id: "93a93", title: "Incoloy Pipes", page: "/incoloy-pipes" },
          { _id: "93a4", title: "Inconel pipes", page: "/inconel-pipes" },
          { _id: "93a5", title: "Hastelloy pipes", page: "/hastelloy-pipes" },
          { _id: "93a6", title: "Monel Pipes", page: "/monel-pipes" },
          { _id: "93a7", title: "Nickel Alloy Pipes", page: "/nickel-alloy-pipes" },
          { _id: "93a8", title: "Titanium Pipes", page: "/titanium-pipes" },
          { _id: "93a9", title: "Copper Nickel Pipes ", page: "/copper-nickel-pipes" },
        ],
      },

    

    
   
      {
        _id: "93e",
        title: "Plates",
        page: "/steel-plates",
        imageSrc: plates,
        sub_sub_category: [
          { _id: "93e1", title: "Steel plates", page: "/steel-plates" },
          { _id: "93e2", title: "Aluminium Plates", page: "/aluminium-plates" },
          { _id: "93e93", title: "Brass Plates", page: "/brass-plates" },
          { _id: "93e4", title: "Bronze Plates", page: "/bronze-plates" },
          { _id: "93e5", title: "Plastic Plates", page: "/plastic-plates" },
          { _id: "93e6", title: "Nickel Plates", page: "/nickel-plates" },
          { _id: "93e7", title: "Composite Plates", page: "/composite-plates" },
          { _id: "93e8", title: "Copper Plates", page: "/copper-plates" },
        ],
      },
   
      {
        _id: "93g",
        title: "Round Bars",
        page: "/steel-roundbars",
        imageSrc: roundbars,
        sub_sub_category: [
          { _id: "93g1", title: "Steel round bars", page: "/steel-roundbars" },
          { _id: "93g2", title: "Aluminium round bars", page: "/aluminium-roundbars" },
          { _id: "93g93", title: "Brass round bars", page: "/brass-roundbars" },
          { _id: "93g4", title: "Bronze round bars", page: "/bronze-roundbars" },
          { _id: "93g5", title: "Plastic round bars", page: "/plastic-roundbars" },
          { _id: "93g6", title: "Nickel round bars", page: "/nickel-roundbars" },
          { _id: "93g7", title: "Composite round bars", page: "/composite-roundbars" },
          { _id: "93g8", title: "Copper round bars", page: "/copper-roundbars" },
          { _id: "93g9", title: "Zinc round bars", page: "/zinc-roundbars" },
        ],
      },

    ],
  },
];
