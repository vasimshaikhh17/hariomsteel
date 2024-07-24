// import pipes from "../../assets/productImages/pipes.png";
// import gaskets from "../../assets/productImages/gaskates.png";
// import flanges from "../../assets/productImages/flanges.png";
// import fastners from "../../assets/productImages/fastners.png";
// import plates from "../../assets/productImages/plates.png";
// import roundbars from "../../assets/productImages/roundbars.png";

// import pipetubefitting from "../../assets/productImages/pipetubefitting.png";
import bolt from "../../assets/newImages/newbolt.png"
import nuts from "../../assets/newImages/newnuts.png"
import washers from "../../assets/newImages/newWashers.png"


import flangbolt from "../../assets/newImages/flange_bolt.png"
import hexbolt from "../../assets/newImages/hex_nut.jpg"
import socketbolt from "../../assets/newImages/socket_nutsss.jpg"
import domedbolt from "../../assets/newImages/domed_bolt.webp"
import flatheadbolt from "../../assets/newImages/flat_head_bolt.png"
import squarehead from "../../assets/newImages/square bolt.png"
import studbolt from "../../assets/newImages/stud_bolt.jpg"


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
    _id: "5",
    title: "Fastners",
    page: "/fastners",

    sub_category: [
      {
        _id: "5a",
        title: "Bolt",
        page: "/bolt",
        subImage : bolt,

        sub_sub_category: [
          { _id: "5a1", title: "Hex Head Bolt", page: "/stainless-steel-pipes" ,subSubImage:hexbolt  },
          { _id: "5a2", title: "Socket Head Bolt", page: "/duplex-super-duplex-pipes",subSubImage:socketbolt },
          { _id: "5a3", title: "Domd Head Bolt ", page: "/incoloy-pipes",subSubImage:domedbolt },
          { _id: "5a4", title: "Flat Head Bolt", page: "/inconel-pipes",subSubImage:flatheadbolt },
          { _id: "5a5", title: "Square Head Bolt", page: "/hastelloy-pipes",subSubImage:squarehead },
          { _id: "5a6", title: "Stud Head Bolt", page: "/monel-pipes" ,subSubImage:studbolt},
          { _id: "5a7", title: "Flange Head Bolt", page: "/nickel-alloy-pipes",subSubImage:flangbolt },

        ],
      },
      {
        _id: "5b",
        title: "Nuts",
        subImage : nuts,

        page: "/stainless-steel-pipes",
        sub_sub_category: [
          { _id: "5b1", title: "Hex Nuts", page: "/stainless-steel-pipes" },
          { _id: "5b2", title: "Heavy Hex Nuts", page: "/duplex-super-duplex-pipes" },
          { _id: "5b3", title: "Jam Nuts", page: "/incoloy-pipes" },
          { _id: "5b4", title: "Lock Nuts", page: "/inconel-pipes" },
          { _id: "5b5", title: "Flang Nuts", page: "/hastelloy-pipes" },
          { _id: "5b6", title: "Castle Nuts", page: "/monel-pipes" },
          { _id: "5b7", title: "Nylock NUts", page: "/nickel-alloy-pipes" },

        ],
      },
      {
        _id: "5c",
        title: "Washers",
        subImage : washers,

        page: "/stainless-steel-pipes",
        sub_sub_category: [
          { _id: "5c1", title: "Flat Washers", page: "/stainless-steel-pipes" },
          { _id: "5c2", title: "Square Washers", page: "/duplex-super-duplex-pipes" },
          { _id: "5c3", title: "Spring Washers", page: "/incoloy-pipes" },

          { _id: "5c5", title: "Flang Nuts", page: "/hastelloy-pipes" },
          { _id: "5c6", title: "Castle Nuts", page: "/monel-pipes" },
          { _id: "5c7", title: "Nylock Nuts", page: "/nickel-alloy-pipes" },

        ],
      },
      {
        _id: "5d",
        title: "Tube Plug",

        page: "/stainless-steel-pipes",



      },
    ]
  },
  {
    _id: "6",
    title: "Pipe Fittings",
    page: "#",
  },
  {
    _id: "7",
    title: "Gaskets",
    page: "#",
  },


  // {
  //   _id: "3",
  //   title: "Others",
  //   page: "/products",

  //   sub_category: [
  //     {
  //       _id: "3a",
  //       title: "Pipes/Tubes",
  //       imageSrc: pipes,
  //       page: "/stainless-steel-pipes",
  //       sub_sub_category: [
  //         { _id: "3a1", title: "Stainless Steel Pipes", page: "/stainless-steel-pipes" },
  //         { _id: "3a2", title: "Duplex / Super Duplex Pipes", page: "/duplex-super-duplex-pipes" },
  //         { _id: "3a3", title: "Incoloy Pipes", page: "/incoloy-pipes" },
  //         { _id: "3a4", title: "Inconel pipes", page: "/inconel-pipes" },
  //         { _id: "3a5", title: "Hastelloy pipes", page: "/hastelloy-pipes" },
  //         { _id: "3a6", title: "Monel Pipes", page: "/monel-pipes" },
  //         { _id: "3a7", title: "Nickel Alloy Pipes", page: "/nickel-alloy-pipes" },
  //         { _id: "3a8", title: "Titanium Pipes", page: "/titanium-pipes" },
  //         { _id: "3a9", title: "Copper Nickel Pipes ", page: "/copper-nickel-pipes" },
  //       ],
  //     },

  //     // {
  //     //   _id: "3b",
  //     //   title: "Flanges",
  //     //   page: "/slip-on-flanges",
  //     //   imageSrc: flanges,
  //     //   sub_sub_category: [
  //     //     { _id: "3b1", title: "Slip On Flanges", page: "/slip-on-flanges" },
  //     //     { _id: "3b2", title: "Weld Neck Flanges", page: "/weld-neck-flanges" },
  //     //     { _id: "3b3", title: "Blind Flanges", page: "/blind-flanges" },
  //     //     { _id: "3b4", title: "Socket Weld Flanges", page: "/socket-weld-flanges" },
  //     //     { _id: "3b5", title: "Orifice Flanges", page: "/orifice-flanges" },
  //     //     { _id: "3b6", title: "Ring Type Joint Flanges", page: "/ring-type-joint-flanges" },
  //     //     { _id: "3b7", title: "AWWA Flanges", page: "/awwwa-flanges" },
  //     //     { _id: "3b8", title: "Reducing Flanges", page: "/reducing-flanges" },
  //     //     { _id: "3b9", title: "Spectacle Flanges", page: "/spectacle-flanges" },
  //     //     { _id: "3b10", title: "Long Weld Neck Flange", page: "/long-weld-neck-flanges" },
  //     //     { _id: "3b11", title: "Lap Joint Flange", page: "/lap-joint-flanges" },
  //     //     { _id: "3b12", title: "Spade Blind Flange", page: "/spade-blind-flanges" },
  //     //     { _id: "3b13", title: "Spacer Flange", page: "/spacer-flanges" },
  //     //     { _id: "3b14", title: "Body Flange", page: "/body-flanges" },

  //     //     { _id: "3b15", title: "Nipo Flange", page: "/nipo-flanges" },
  //     //   ],
  //     // },

  //     // {
  //     //   _id: "3d",
  //     //   title: "Pipe/tube Fittings",

  //     //   page: "/buttweld-stub-ends",
  //     //   imageSrc: pipetubefitting,
  //     //   sub_sub_category: [
  //     //     { _id: "3d1", title: "Buttweld Stub Ends", page: "/buttweld-stub-ends" },
  //     //     { _id: "3d2", title: "Buttweld End Caps", page: "/buttweld-end-caps" },
  //     //     { _id: "3d3", title: "Buttweld Cross", page: "/buttweld-cross" },
  //     //     { _id: "3d4", title: "Buttweld Reducer", page: "/buttweld-reducer" },
  //     //     { _id: "3d5", title: "Buttweld Tee", page: "/buttweld-tee" },
  //     //     { _id: "3d6", title: "Buttweld Elbow", page: "/buttweld-elbow" },
  //     //     { _id: "3d7", title: "MALE CONNECTOR", page: "/male-connector" },
  //     //     { _id: "3d9", title: "TUBE UNION", page: "/tube-union" },
  //     //     { _id: "3d10", title: "TUBE TEE", page: "/tube-tee" },


  //     //     { _id: "3d11", title: "BULKHEAD CONNECTOR", page: "/bulk-head-connector" },
  //     //     { _id: "3d12", title: "VALVES", page: "/valves" },
  //     //   ],
  //     // },
  //     // {
  //     //   _id: "3c",
  //     //   title: "Fasteners",
  //     //   page: "/heavy-hex-bolts",
  //     //   imageSrc: fastners,
  //     //   sub_sub_category: [
  //     //     { _id: "3c1", title: "HEAVY HEX BOLTS", page: "/heavy-hex-bolts" },
  //     //     { _id: "3c2", title: "U BOLTS", page: "/u-bolts" },
  //     //     { _id: "3c3", title: "EYE BOLTS", page: "/eye-bolts" },
  //     //     { _id: "3c4", title: "ANCHOR BOLTS", page: "/anchor-bolts" },
  //     //     { _id: "3c5", title: "WASHERS", page: "/washers" },
  //     //     { _id: "3c6", title: "STUD BOLTS", page: "/stud-bolts" },
  //     //     { _id: "3c7", title: "HEAVY HEX NUTS", page: "/heavy-hex-nuts" },
  //     //     { _id: "3c8", title: "HEX BOLTS", page: "/hex-bolts" },
  //     //   ],
  //     // },
  //     {
  //       _id: "3e",
  //       title: "Plates",
  //       page: "/steel-plates",
  //       imageSrc: plates,
  //       sub_sub_category: [
  //         { _id: "3e1", title: "Steel plates", page: "/steel-plates" },
  //         { _id: "3e2", title: "Aluminium Plates", page: "/aluminium-plates" },
  //         { _id: "3e3", title: "Brass Plates", page: "/brass-plates" },
  //         { _id: "3e4", title: "Bronze Plates", page: "/bronze-plates" },
  //         { _id: "3e5", title: "Plastic Plates", page: "/plastic-plates" },
  //         { _id: "3e6", title: "Nickel Plates", page: "/nickel-plates" },
  //         { _id: "3e7", title: "Composite Plates", page: "/composite-plates" },
  //         { _id: "3e8", title: "Copper Plates", page: "/copper-plates" },
  //       ],
  //     },
  //     // {
  //     //   _id: "3f",
  //     //   title: "Gasket",
  //     //   page: "/monel-gasket",
  //     //   imageSrc: gaskets,
  //     //   sub_sub_category: [
  //     //     { _id: "3f1", title: "Monel Gasket", page: "/monel-gasket" },
  //     //     { _id: "3f2", title: "Alloy Steel Gasket", page: "/alloy-steel-gasket" },
  //     //     { _id: "3f3", title: "Titanium Gasket", page: "/titanium-gasket" },
  //     //     { _id: "3f4", title: "Soft Iron Gasket", page: "/soft-iron-gasket" },
  //     //     { _id: "3f5", title: "Duplex Steel Gasket", page: "/duplex-steel-gasket" },
  //     //     { _id: "3f6", title: "SS Gasket", page: "/ss-gasket" },
  //     //   ],
  //     // },
  //     {
  //       _id: "3g",
  //       title: "Round Bars",
  //       page: "/steel-roundbars",
  //       imageSrc: roundbars,
  //       sub_sub_category: [
  //         { _id: "3g1", title: "Steel round bars", page: "/steel-roundbars" },
  //         { _id: "3g2", title: "Aluminium round bars", page: "/aluminium-roundbars" },
  //         { _id: "3g3", title: "Brass round bars", page: "/brass-roundbars" },
  //         { _id: "3g4", title: "Bronze round bars", page: "/bronze-roundbars" },
  //         { _id: "3g5", title: "Plastic round bars", page: "/plastic-roundbars" },
  //         { _id: "3g6", title: "Nickel round bars", page: "/nickel-roundbars" },
  //         { _id: "3g7", title: "Composite round bars", page: "/composite-roundbars" },
  //         { _id: "3g8", title: "Copper round bars", page: "/copper-roundbars" },
  //         { _id: "3g9", title: "Zinc round bars", page: "/zinc-roundbars" },
  //       ],
  //     },

  //   ],
  // },



  {
    _id: "8",
    title: "Materials",
    page: "/gallery",

    sub_category: [
      {
        _id: "8a",
        title: "Alloy Steel",
        page: "/bolt",
   


      },
      {
        _id: "8b",
        title: "Carbon Steel",
        page: "/bolt",
   


      },
      {
        _id: "8c",
        title: "Stenless Steel",
        page: "/bolt",
   


      },
      {
        _id: "8d",
        title: "Stenless Steel",
        page: "/bolt",
   


      },
      {
        _id: "8e",
        title: "Duplex Steel",
        page: "/bolt",
   


      },
      {
        _id: "8e",
        title: "Exotic",
        page: "/bolt",
   


      },
    ]
  },
  {
    _id: "4",
    title: "Gallery",
    page: "/gallery",
  },

];