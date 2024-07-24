import React, { useEffect } from "react";
import Home from "./components/HomeComponent/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./components/ProductComponent/Products";

import AboutUs from "./components/AboutComponent/AboutUs";
import "aos/dist/aos.css";
import Aos from "aos";
import StainlessSteelPipes from "./components/AllProducts/Pipes/StainlessSteelPipes";
import ContactUs from "./components/ContactUs/ContactUs";
import DuplexSuperDuplexPipes from "./components/AllProducts/Pipes/DuplexSuperDuplexPipes";
import IncoloyPipes from "./components/AllProducts/Pipes/IncoloyPipes";
import InconelPipes from "./components/AllProducts/Pipes/InconelPipes";
import HastelloyPipes from "./components/AllProducts/Pipes/HastelloyPipes";
import MonelPipes from "./components/AllProducts/Pipes/MonelPipes";
import NickelAlloyPipes from "./components/AllProducts/Pipes/NickelAlloyPipes";
import TitaniumPipes from "./components/AllProducts/Pipes/TitaniumPipes";
import CopperNickelPipes from "./components/AllProducts/Pipes/CopperNickelPipes";
import SlipOnFlanges from "./components/AllProducts/Flanges/SlipOnFlanges";
import AwwaFlanges from "./components/AllProducts/Flanges/AwwaFlanges";
import BlindFlanges from "./components/AllProducts/Flanges/BlindFlanges";
import BodyFlange from "./components/AllProducts/Flanges/BodyFlange";
import LapJointFlanges from "./components/AllProducts/Flanges/LapJointFlange";
import LongWeldNeckFlanges from "./components/AllProducts/Flanges/LongWeldNeckFlange";
import NipoFlanges from "./components/AllProducts/Flanges/NipoFlange";
import OrificeFlanges from "./components/AllProducts/Flanges/OrificeFlanges";
import ReducingFlanges from "./components/AllProducts/Flanges/ReducingFlanges";
import RingTypeJointFlanges from "./components/AllProducts/Flanges/RingTypeJointFlanges";
import SocketWeldFlanges from "./components/AllProducts/Flanges/SocketWeldFlanges";
import SpacerFlanges from "./components/AllProducts/Flanges/SpacerFlange";
import SpadeBlindFlanges from "./components/AllProducts/Flanges/SpadeBlindFlange";
import SpectacleFlanges from "./components/AllProducts/Flanges/SpectacleFlanges";
import WeldNeckFlanges from "./components/AllProducts/Flanges/WeldNeckFlanges";
import BulkheadConnector from "./components/AllProducts/PipeTubeFitting/BulkheadConnector";
import ButtweldCross from "./components/AllProducts/PipeTubeFitting/ButtweldCross";
import ButtweldElbow from "./components/AllProducts/PipeTubeFitting/ButtweldElbow";
import ButtweldEndCaps from "./components/AllProducts/PipeTubeFitting/ButtweldEndCaps";
import ButtweldReducer from "./components/AllProducts/PipeTubeFitting/ButtweldReducer";
import ButtweldStubEnds from "./components/AllProducts/PipeTubeFitting/ButtweldStubEnds";
import ButtweldTee from "./components/AllProducts/PipeTubeFitting/ButtweldTee";
import MaleConnector from "./components/AllProducts/PipeTubeFitting/MaleConnector";
import TubeTee from "./components/AllProducts/PipeTubeFitting/TubeTee";
import TubeUnion from "./components/AllProducts/PipeTubeFitting/TubeUnion";
import Valves from "./components/AllProducts/PipeTubeFitting/Valves";
import AnchorBolts from "./components/AllProducts/Fasteners/AnchorBolts";
import HeavyHexBolts from "./components/AllProducts/Fasteners/HeavyHexBolts";
import EyeBolts from "./components/AllProducts/Fasteners/EyeBolts";
import HeavyHexNuts from "./components/AllProducts/Fasteners/HeavyHexNutss.jsx";

import StudBolts from "./components/AllProducts/Fasteners/StudBolts.jsx";
import HexBolts from "./components/AllProducts/Fasteners/HexBolts.jsx";
import Washers from "./components/AllProducts/Fasteners/Washers.jsx";
import UBolts from "./components/AllProducts/Fasteners/UBolts.jsx";
import AluminiumPlates from "./components/AllProducts/Plates/AluminiumPlates.jsx";
import BrassPlates from "./components/AllProducts/Plates/BrassPlates.jsx";
import BronzePlates from "./components/AllProducts/Plates/BronzePlates.jsx";
import CompositePlates from "./components/AllProducts/Plates/CompositePlates.jsx";
import CopperPlates from "./components/AllProducts/Plates/CopperPlates.jsx";
import NickelPlates from "./components/AllProducts/Plates/NickelPlates.jsx";
import PlasticPlates from "./components/AllProducts/Plates/PlasticPlates.jsx";
import SteelPlates from "./components/AllProducts/Plates/SteelPlates.jsx";
import MonelGasket from "./components/AllProducts/Gaskets/MonelGasket.jsx";
import AlloySteelGasket from "./components/AllProducts/Gaskets/AlloySteelGasket.jsx";
import DuplexSteelGasket from "./components/AllProducts/Gaskets/DuplexSteelGasket.jsx";
import SoftIronGasket from "./components/AllProducts/Gaskets/SoftIronGasket.jsx";
import SSGasket from "./components/AllProducts/Gaskets/SSGasket.jsx";
import TitaniumGasket from "./components/AllProducts/Gaskets/TitaniumGasket.jsx";
import BrassRoundBars from "./components/AllProducts/RoundBars/BrassRoundBars.jsx";
import BronzeRoundBars from "./components/AllProducts/RoundBars/BronzeRoundBars.jsx";
import CompositeRoundBars from "./components/AllProducts/RoundBars/CompositeRoundBars.jsx";
import CopperRoundBars from "./components/AllProducts/RoundBars/CopperRoundBars.jsx";
import NickelRoundBars from "./components/AllProducts/RoundBars/NickelRoundBars.jsx";
import PlasticRoundBars from "./components/AllProducts/RoundBars/PlasticRoundBars.jsx";
import SteelRoundBars from "./components/AllProducts/RoundBars/SteelRoundBars.jsx";
import ZincRoundBars from "./components/AllProducts/RoundBars/ZincRoundBars.jsx";
import AluminiumRoundBars from "./components/AllProducts/RoundBars/AluminiumRoundBars.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Fastners from "./components/ProductComponent/NewFastners/Fastners.jsx";
import Bolt from "./components/ProductComponent/NewFastners/Bolt.jsx";




const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery/>} />

        {/* --------------------------  Pipes   -------------------------------- */}
        <Route
          path="/stainless-steel-pipes"
          element={<StainlessSteelPipes />}
        />
        <Route
          path="/duplex-super-duplex-pipes"
          element={<DuplexSuperDuplexPipes />}
        />
        <Route path="/incoloy-pipes" element={<IncoloyPipes />} />
        <Route path="/inconel-pipes" element={<InconelPipes />} />
        <Route path="/hastelloy-pipes" element={<HastelloyPipes />} />
        <Route path="/monel-pipes" element={<MonelPipes />} />
        <Route path="/nickel-alloy-pipes" element={<NickelAlloyPipes />} />
        <Route path="/titanium-pipes" element={<TitaniumPipes />} />
        <Route path="/copper-nickel-pipes" element={<CopperNickelPipes />} />
        {/* --------------------------Pipes-------------------------------- */}
        {/*................................ Flange............................ */}

        <Route path="/slip-on-flanges" element={<SlipOnFlanges />} />
        <Route path="/awwwa-flanges" element={<AwwaFlanges />} />
        <Route path="/blind-flanges" element={<BlindFlanges />} />
        <Route path="/body-flanges" element={<BodyFlange />} />
        <Route path="/lap-joint-flanges" element={<LapJointFlanges />} />
        <Route path="/long-weld-neck-flanges" element={<LongWeldNeckFlanges />} />
        <Route path="/nipo-flanges" element={<NipoFlanges />} />
        <Route path="/orifice-flanges" element={<OrificeFlanges />} />
        <Route path="/reducing-flanges" element={<ReducingFlanges />} />
        <Route path="/ring-type-joint-flanges" element={<RingTypeJointFlanges />} />
        <Route path="/socket-weld-flanges" element={<SocketWeldFlanges />} />
        <Route path="/spacer-flanges" element={<SpacerFlanges />} />
        <Route path="/spade-blind-flanges" element={<SpadeBlindFlanges />} />
        <Route path="/spectacle-flanges" element={<SpectacleFlanges />} />
        <Route path="/weld-neck-flanges" element={<WeldNeckFlanges />} />
        {/*................................ Flange............................ */}


        {/* ----------------------------------Pipe/Tube Fittings ----------------------- */}
        <Route path="/bulk-head-connector" element={<BulkheadConnector/>} />
        <Route path="/buttweld-cross" element={<ButtweldCross/>} />
        <Route path="/buttweld-elbow" element={<ButtweldElbow/>} />
        <Route path="/buttweld-end-caps" element={<ButtweldEndCaps/>} />
        <Route path="/buttweld-reducer" element={<ButtweldReducer/>} />
        <Route path="/buttweld-stub-ends" element={<ButtweldStubEnds/>} />
        <Route path="/buttweld-tee" element={<ButtweldTee/>} />
        <Route path="/male-connector" element={<MaleConnector/>} />
        <Route path="/tube-tee" element={<TubeTee/>} />
        <Route path="/tube-union" element={<TubeUnion/>} />
        <Route path="/valves" element={<Valves/>} />

        {/* ----------------------------------Pipe/Tube Fittings ----------------------- */}
        {/* ----------------------------------Fasteners ----------------------- */}


        <Route path="/anchor-bolts" element={<AnchorBolts/>} />
        <Route path="/heavy-hex-bolts" element={<HeavyHexBolts/>} />
        <Route path="/eye-bolts" element={<EyeBolts/>} />
        <Route path="/heavy-hex-nuts" element={<HeavyHexNuts/>} />
        
        <Route path="/stud-bolts" element={<StudBolts/>} />
        <Route path="/hex-bolts" element={<HexBolts/>} />
        <Route path="/washers" element={<Washers/>} />
        <Route path="/u-bolts" element={<UBolts/>} />
        
        {/* ----------------------------------Fasteners ----------------------- */}


        {/* ------------------------------------Plates--------------------------------- */}
        <Route path="/aluminium-plates" element={<AluminiumPlates/>} />
        <Route path="/brass-plates" element={<BrassPlates/>} />
        <Route path="/bronze-plates" element={<BronzePlates/>} />
        <Route path="/composite-plates" element={<CompositePlates/>} />
        <Route path="/copper-plates" element={<CopperPlates/>} />
        <Route path="/nickel-plates" element={<NickelPlates/>} />
        <Route path="/plastic-plates" element={<PlasticPlates/>} />
        <Route path="/steel-plates" element={<SteelPlates/>} />

        {/* ------------------------------------Plates--------------------------------- */}
        {/* ------------------------------------Gaskets--------------------------------- */}

        <Route path="/monel-gasket" element={<MonelGasket/>} />
        <Route path="/alloy-steel-gasket" element={<AlloySteelGasket/>} />
        <Route path="/duplex-steel-gasket" element={<DuplexSteelGasket/>} />
        <Route path="/soft-iron-gasket" element={<SoftIronGasket/>} />
        <Route path="/ss-gasket" element={<SSGasket/>} />
        <Route path="/titanium-gasket" element={<TitaniumGasket/>} />

        {/* ------------------------------------GAskets--------------------------------- */}


        {/* ----------------------------------------Round Bars-------------------------------------- */}
        <Route path="/brass-roundbars" element={<BrassRoundBars/>} />
        <Route path="/bronze-roundbars" element={<BronzeRoundBars/>} />
        <Route path="/composite-roundbars" element={<CompositeRoundBars/>} />
        <Route path="/copper-roundbars" element={<CopperRoundBars/>} />
        <Route path="/nickel-roundbars" element={<NickelRoundBars/>} />
        <Route path="/plastic-roundbars" element={<PlasticRoundBars/>} />
        <Route path="/steel-roundbars" element={<SteelRoundBars/>} />
        <Route path="/zinc-roundbars" element={<ZincRoundBars/>} />
        <Route path="/aluminium-roundbars" element={<AluminiumRoundBars/>} />

        {/* ----------------------------------------Round Bars-------------------------------------- */}



        {/* -------------------------------------------new fastners-------------------------------------------- */}
        <Route path="/fastners" element={<Fastners/>} />
        <Route path="/bolt" element={<Bolt/>} />

        {/* -------------------------------------------new fastners-------------------------------------------- */}
      </Routes>

    </>
  );
};

export default App;
