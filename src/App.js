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

import StudBolts from "./components/AllProducts/Fasteners/StudBolts.jsx";
import HexBolts from "./components/AllProducts/Fasteners/HexBolts.jsx";

import AluminiumPlates from "./components/AllProducts/Plates/AluminiumPlates.jsx";
import BrassPlates from "./components/AllProducts/Plates/BrassPlates.jsx";
import BronzePlates from "./components/AllProducts/Plates/BronzePlates.jsx";
import CompositePlates from "./components/AllProducts/Plates/CompositePlates.jsx";
import CopperPlates from "./components/AllProducts/Plates/CopperPlates.jsx";
import NickelPlates from "./components/AllProducts/Plates/NickelPlates.jsx";
import PlasticPlates from "./components/AllProducts/Plates/PlasticPlates.jsx";
import SteelPlates from "./components/AllProducts/Plates/SteelPlates.jsx";
import MonelGasket from "./components/AllProducts/Gaskets/MonelGasket.jsx";

import DuplexSteelGasket from "./components/AllProducts/Gaskets/DuplexSteelGasket.jsx";
import SoftIronGasket from "./components/AllProducts/Gaskets/SoftIronGasket.jsx";
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
import Materials from "./components/Materials/Materials.jsx";
import AlloySteel from "./components/Materials/Alloy/AlloySteel.jsx";
import ASTMA193GRB7Bolts from "./components/Materials/Alloy/ASTMA193GRB7Bolts.jsx";

import FastnerPage from "./components/AllProducts/Fasteners/FastnerPage.jsx";
import FlangesPage from "./components/AllProducts/Flanges/FlangesPage.jsx";
import GasketsPage from "./components/AllProducts/Gaskets/GasketsPage.jsx";
import FittingsPage from "./components/AllProducts/PipeTubeFitting/FittingsPage.jsx";
import ForgedFittingPage from "./components/AllProducts/PipeTubeFitting/ForgedFitting.jsx";
import ButtweldFittingPage from "./components/AllProducts/PipeTubeFitting/ButtweldFittingPage.jsx";
import OletsFittingPage from "./components/AllProducts/PipeTubeFitting/OletsFittingPage.jsx";
import BoltsPage from "./components/AllProducts/Fasteners/BoltsPage.jsx";
import NutsPage from "./components/AllProducts/Fasteners/NutsPage.jsx";
import WashersPage from "./components/AllProducts/Fasteners/WashersPage.jsx";
import SpiralWound from "./components/AllProducts/Gaskets/SpiralWound.jsx";
import RingJoint from "./components/AllProducts/Gaskets/RingJoint.jsx";
import NonMetallic from "./components/AllProducts/Gaskets/NonMetallic.jsx";
import Metallic from "./components/AllProducts/Gaskets/Metallic.jsx";
import FoundationBolt from "./components/AllProducts/Fasteners/FoundationBolt.jsx";
import HexNuts from "./components/AllProducts/Fasteners/Nuts/HexNuts.jsx";
import HeavyHexNuts from "./components/AllProducts/Fasteners/Nuts/HeavyHexNuts.jsx";
import LockNuts from "./components/AllProducts/Fasteners/Nuts/LockNuts.jsx";
import CastleNuts from "./components/AllProducts/Fasteners/Nuts/CastleNuts.jsx";
import FlangeNuts from "./components/AllProducts/Fasteners/Nuts/FlangeNuts.jsx";
import HeaderPlug from "./components/AllProducts/Fasteners/Plug/HeaderPlug.jsx";
import StandarsWashers from "./components/AllProducts/Fasteners/Washers/StandarsWashers.jsx";
import SpringWashers from "./components/AllProducts/Fasteners/Washers/SpringWashers.jsx";
import HvWashers from "./components/AllProducts/Fasteners/Washers/HvWashers.jsx";
import CarbonSteel from "./components/Materials/Carbon/CarbonSteel.jsx";
import StainlessSteel from "./components/Materials/StainlessSteel/StainlessSteel.jsx";
import DuplexSteel from "./components/Materials/DuplexSteel/DuplexSteel.jsx";
import Exotic from "./components/Materials/Exotic/Exotic.jsx";
import DuplexSteelUNSS31803S32205PipeFittings from "./components/Materials/DuplexSteel/DuplexSteelUNSS31803S32205PipeFittings.jsx";
import DuplexSteelUNSS31803S32205ForgedFittings from "./components/Materials/DuplexSteel/DuplexSteelUNSS31803S32205ForgedFittings.jsx";
import DuplexSteelUNSS31803S32205Flanges from "./components/Materials/DuplexSteel/DuplexSteelUNSS31803S32205Flanges.jsx";






import Degree45 from "./components/AllProducts/PipeTubeFitting/ForgedFitting/Degree45.jsx";
import Degree90 from "./components/AllProducts/PipeTubeFitting/ForgedFitting/Degree90.jsx";
import Cross from "./components/AllProducts/PipeTubeFitting/ForgedFitting/Cross.jsx";
import Coupling from "./components/AllProducts/PipeTubeFitting/ForgedFitting/Coupling.jsx";
import Union from "./components/AllProducts/PipeTubeFitting/ForgedFitting/Union.jsx";
import Adapters from "./components/AllProducts/PipeTubeFitting/ForgedFitting/Adapters.jsx";
import Bushing from "./components/AllProducts/PipeTubeFitting/ForgedFitting/Bushing.jsx";
import HexNipple from "./components/AllProducts/PipeTubeFitting/ForgedFitting/HexNipple.jsx";
import Buttweld45 from "./components/AllProducts/PipeTubeFitting/ButtweldFitting/Buttweld45.jsx";
import Buttweld90 from "./components/AllProducts/PipeTubeFitting/ButtweldFitting/Buttweld90.jsx";
import Buttweld180 from "./components/AllProducts/PipeTubeFitting/ButtweldFitting/Buttweld180.jsx";
import ConcentricReducers from "./components/AllProducts/PipeTubeFitting/ButtweldFitting/ConcentricReducers.jsx";
import EccentricReducers from "./components/AllProducts/PipeTubeFitting/ButtweldFitting/EccentricReducers.jsx";
import Endcaps from "./components/AllProducts/PipeTubeFitting/ButtweldFitting/Endcaps.jsx";
import EqualTee from "./components/AllProducts/PipeTubeFitting/ButtweldFitting/EqualTee.jsx";
import ReducingTee from "./components/AllProducts/PipeTubeFitting/ButtweldFitting/ReducingTee.jsx";
import Stubend from "./components/AllProducts/PipeTubeFitting/ButtweldFitting/Stubend.jsx";
import Elbolet from "./components/AllProducts/PipeTubeFitting/Olets/Elbolet.jsx";
import Laterolet from "./components/AllProducts/PipeTubeFitting/Olets/Laterolet.jsx";
import NippOlet from "./components/AllProducts/PipeTubeFitting/Olets/NippOlet.jsx";
import SockOlets from "./components/AllProducts/PipeTubeFitting/Olets/SockOlets.jsx";
import SweepOlet from "./components/AllProducts/PipeTubeFitting/Olets/SweepOlet.jsx";
import ThreadOlets from "./components/AllProducts/PipeTubeFitting/Olets/ThreadOlets.jsx";
import WeldOlets from "./components/AllProducts/PipeTubeFitting/Olets/WeldOlets.jsx";





import NickelAlloy200201PipeFittings from "./components/Materials/Exotic/NickelAlloy200201PipeFittings.jsx";
import NickelAlloy200201ForgedFittings from "./components/Materials/Exotic/NickelAlloy200201ForgedFittings.jsx";
import Monel400K500PipeFittings from "./components/Materials/Exotic/Monel400K500PipeFittings.jsx";
import Monel400K500ForgedFittings from "./components/Materials/Exotic/Monel400K500ForgedFittings.jsx";
import HastelloyC22PipeFittings from "./components/Materials/Exotic/HastelloyC22PipeFittings.jsx";
import HastelloyC276PipeFittings from "./components/Materials/Exotic/HastelloyC276PipeFittings.jsx";
import HastelloyC22ForgedFittings from "./components/Materials/Exotic/HastelloyC22ForgedFittings.jsx";
import HastelloyC276ForgedFittings from "./components/Materials/Exotic/HastelloyC276ForgedFittings.jsx";
import Inconel600PipeFittings from "./components/Materials/Exotic/Inconel600PipeFittings.jsx";
import Inconel601PipeFittings from "./components/Materials/Exotic/Inconel601PipeFittings.jsx";
import Inconel625PipeFittings from "./components/Materials/Exotic/Inconel625PipeFittings.jsx";
import Inconel625ForgedFittings from "./components/Materials/Exotic/Inconel625ForgedFittings.jsx";
import Inconel600ForgedFittings from "./components/Materials/Exotic/Inconel600ForgedFittings.jsx";
import Inconel601ForgedFittings from "./components/Materials/Exotic/Inconel601ForgedFittings.jsx";
import NickelAlloy200201Fasteners from "./components/Materials/Exotic/NickelAlloy200201Fasteners.jsx";
import NickelAlloy200201Flanges from "./components/Materials/Exotic/NickelAlloy200201Flanges.jsx";
import Monel400K500Flanges from "./components/Materials/Exotic/Monel400K500Flanges.jsx";
import HastelloyC22Flanges from "./components/Materials/Exotic/HastelloyC22Flanges.jsx";
import HastelloyC276Flanges from "./components/Materials/Exotic/HastelloyC276Flanges.jsx";
import Inconel600Flanges from "./components/Materials/Exotic/Inconel600Flanges.jsx";
import Inconel601Flanges from "./components/Materials/Exotic/Inconel601Flanges.jsx";
import Inconel625Flanges from "./components/Materials/Exotic/Inconel625Flanges.jsx";
import Monel400K500Fasteners from "./components/Materials/Exotic/Monel400K500Fasteners.jsx";
import HastelloyC22Fasteners from "./components/Materials/Exotic/HastelloyC22Fasteners.jsx";
import HastelloyC276Fasteners from "./components/Materials/Exotic/HastelloyC276Fasteners.jsx";
import Inconel600Fasteners from "./components/Materials/Exotic/Inconel600Fasteners.jsx";
import Inconel601Fasteners from "./components/Materials/Exotic/Inconel601Fasteners.jsx";
import Inconel625Fasteners from "./components/Materials/Exotic/Inconel625Fasteners.jsx";





import DuplexSteelUNSS31803S32205Fasteners from "./components/Materials/DuplexSteel/DuplexSteelUNSS31803S32205Fasteners.jsx";
import CarbonSteelA234WPBPipeFittings from "./components/Materials/Carbon/CarbonSteelA234WPBPipeFittings.jsx";
import CarbonSteelWPHYFittings from "./components/Materials/Carbon/CarbonSteelWPHYFittings.jsx";
import CarbonSteelASTMA420WPL6Fittings from "./components/Materials/Carbon/CarbonSteelASTMA420WPL6Fittings.jsx";
import CarbonSteelA105NForgedFittings from "./components/Materials/Carbon/CarbonSteelA105NForgedFittings.jsx";
import CarbonSteelA105NFlanges from "./components/Materials/Carbon/CarbonSteelA105NFlanges.jsx";
import CarbonSteelAWWAFlanges from "./components/Materials/Carbon/CarbonSteelAWWAFlanges.jsx";
import CarbonSteelASTMA350LF2Flanges from "./components/Materials/Carbon/CarbonSteelASTMA350LF2Flanges.jsx";
import SA516Gr6070SpectacleBlindFlange from "./components/Materials/Carbon/SA516Gr6070SpectacleBlindFlange.jsx";
import StainlessSteel304304LFasteners from "./components/Materials/StainlessSteel/StainlessSteel304_304LFasteners.jsx";
import StainlessSteel310310SFasteners from "./components/Materials/StainlessSteel/StainlessSteel310_310SFasteners.jsx";
import StainlessSteel316316LFasteners from "./components/Materials/StainlessSteel/StainlessSteel316_316LFasteners.jsx";
import StainlessSteel904LFasteners from "./components/Materials/StainlessSteel/StainlessSteel904LFasteners.jsx";
import ASTMA193GRB8MBolts from "./components/Materials/StainlessSteel/ASTMA193GRB8MBolts.jsx";
import ASTMA193GRB8Bolts from "./components/Materials/StainlessSteel/ASTMA193GRB8Bolts.jsx";
import StainlessSteel304Flanges from "./components/Materials/StainlessSteel/StainlessSteel304Flanges.jsx";
import StainlessSteel304LFlanges from "./components/Materials/StainlessSteel/StainlessSteel304LFlanges.jsx";
import StainlessSteel304HFlanges from "./components/Materials/StainlessSteel/StainlessSteel304HFlanges.jsx";
import StainlessSteel310SFlanges from "./components/Materials/StainlessSteel/StainlessSteel310SFlanges.jsx";
import StainlessSteel316Flanges from "./components/Materials/StainlessSteel/StainlessSteel316Flanges.jsx";
import StainlessSteel316LFlanges from "./components/Materials/StainlessSteel/StainlessSteel316LFlanges.jsx";
import StainlessSteel316HFlanges from "./components/Materials/StainlessSteel/StainlessSteel316HFlanges.jsx";
import StainlessSteel316TIFlanges from "./components/Materials/StainlessSteel/StainlessSteel316TIFlanges.jsx";
import StainlessSteel317317LFlanges from "./components/Materials/StainlessSteel/StainlessSteel317_317LFlanges.jsx";
import StainlessSteel321321HFlanges from "./components/Materials/StainlessSteel/StainlessSteel321_321HFlanges.jsx";
import StainlessSteel347347HFlanges from "./components/Materials/StainlessSteel/StainlessSteel347_347HFlanges.jsx";
import StainlessSteel904LFlanges from "./components/Materials/StainlessSteel/StainlessSteel904LFlanges.jsx";





import ASTMA193GRB7MBolts from "./components/Materials/Alloy/ASTMA193GRB7MBolts.jsx";
import ASTMA193GRB16Bolts from "./components/Materials/Alloy/ASTMA193GRB16Bolts.jsx";
import ASTMA320GRL7Fasteners from "./components/Materials/Alloy/ASTMA320GRL7Fasteners.jsx";
import AlloySteel2H2HMFasteners from "./components/Materials/Alloy/AlloySteel2H2HMFasteners.jsx";
import AlloySteelB8Fasteners from "./components/Materials/Alloy/AlloySteelB8Fasteners.jsx";
import AlloySteelB8MFasteners from "./components/Materials/Alloy/AlloySteelB8MFasteners.jsx";
import AlloySteelB6Fasteners from "./components/Materials/Alloy/AlloySteelB6Fasteners.jsx";
import AlloySteelA182F1Flanges from "./components/Materials/Alloy/AlloySteelA182F1Flanges.jsx";
import AlloySteelA182F5Flanges from "./components/Materials/Alloy/AlloySteelA182F5Flanges.jsx";
import AlloySteelA182F9Flanges from "./components/Materials/Alloy/AlloySteelA182F9Flanges.jsx";
import AlloySteelA182F11Flanges from "./components/Materials/Alloy/AlloySteelA182F11Flanges.jsx";
import AlloySteelA182F12Flanges from "./components/Materials/Alloy/AlloySteelA182F12Flanges.jsx";
import AlloySteelA182F22Flanges from "./components/Materials/Alloy/AlloySteelA182F22Flanges.jsx";
import AlloySteelA182F91Flanges from "./components/Materials/Alloy/AlloySteelA182F91Flanges.jsx";
import AlloySteelA234WP1PipeFittings from "./components/Materials/Alloy/AlloySteelA234WP1PipeFittings.jsx";
import AlloySteelA234WP5PipeFittings from "./components/Materials/Alloy/AlloySteelA234WP5PipeFittings.jsx";
import AlloySteelA234WP9PipeFittings from "./components/Materials/Alloy/AlloySteelA234WP9PipeFittings.jsx";
import AlloySteelA234WP11PipeFittings from "./components/Materials/Alloy/AlloySteelA234WP11PipeFittings.jsx";
import AlloySteelA234WP12PipeFittings from "./components/Materials/Alloy/AlloySteelA234WP12PipeFittings.jsx";
import AlloySteelA234WP22PipeFittings from "./components/Materials/Alloy/AlloySteelA234WP22PipeFittings.jsx";
import AlloySteelA234WP91PipeFittings from "./components/Materials/Alloy/AlloySteelA234WP91PipeFittings.jsx";
import AlloySteelA182F1ForgedFittings from "./components/Materials/Alloy/AlloySteelA182F1ForgedFittings.jsx";
import AlloySteelA182F5ForgedFittings from "./components/Materials/Alloy/AlloySteelA182F5ForgedFittings.jsx";
import AlloySteelA182F9ForgedFittings from "./components/Materials/Alloy/AlloySteelA182F9ForgedFittings.jsx";
import AlloySteelA182F11ForgedFittings from "./components/Materials/Alloy/AlloySteelA182F11ForgedFittings.jsx";
import AlloySteelA182F12ForgedFittings from "./components/Materials/Alloy/AlloySteelA182F12ForgedFittings.jsx";
import AlloySteelA182F22ForgedFittings from "./components/Materials/Alloy/AlloySteelA182F22ForgedFittings.jsx";
import AlloySteelA182F91ForgedFittings from "./components/Materials/Alloy/AlloySteelA182F91ForgedFittings.jsx";
import AlloySteelA182F1Outlets from "./components/Materials/Alloy/AlloySteelA182F1Outlets.jsx";
import AlloySteelA182F5Outlets from "./components/Materials/Alloy/AlloySteelA182F5Outlets.jsx";
import AlloySteelA182F9Outlets from "./components/Materials/Alloy/AlloySteelA182F9Outlets.jsx";
import AlloySteelA182F11Outlets from "./components/Materials/Alloy/AlloySteelA182F11Outlets.jsx";
import AlloySteelA182F12Outlets from "./components/Materials/Alloy/AlloySteelA182F12Outlets.jsx";
import AlloySteelA182F22Outlets from "./components/Materials/Alloy/AlloySteelA182F22Outlets.jsx";
import AlloySteelA182F91Outlets from "./components/Materials/Alloy/AlloySteelA182F91Outlets.jsx";
import StainlessSteel304PipeFittings from "./components/Materials/StainlessSteel/SSPipeFittings/StainlessSteel304PipeFittings.jsx";
import StainlessSteel304LPipeFittings from "./components/Materials/StainlessSteel/SSPipeFittings/StainlessSteel304LPipeFittings.jsx";
import StainlessSteel304HPipeFittings from "./components/Materials/StainlessSteel/SSPipeFittings/StainlessSteel304HPipeFittings.jsx";
import StainlessSteel310SPipeFittings from "./components/Materials/StainlessSteel/SSPipeFittings/StainlessSteel310SPipeFittings.jsx";
import StainlessSteel316PipeFittings from "./components/Materials/StainlessSteel/SSPipeFittings/StainlessSteel316PipeFittings.jsx";
import StainlessSteel316LPipeFittings from "./components/Materials/StainlessSteel/SSPipeFittings/StainlessSteel316LPipeFittings.jsx";
import StainlessSteel316HPipeFittings from "./components/Materials/StainlessSteel/SSPipeFittings/StainlessSteel316HPipeFittings.jsx";
import StainlessSteel316TIPipeFittings from "./components/Materials/StainlessSteel/SSPipeFittings/StainlessSteel316TIPipeFittings.jsx";
import StainlessSteel317317LPipeFittings from "./components/Materials/StainlessSteel/SSPipeFittings/StainlessSteel317317LPipeFittings.jsx";
import StainlessSteel321321HPipeFittings from "./components/Materials/StainlessSteel/SSPipeFittings/StainlessSteel321321HPipeFittings.jsx";
import StainlessSteel347347HPipeFittings from "./components/Materials/StainlessSteel/SSPipeFittings/StainlessSteel347347HPipeFittings.jsx";
import StainlessSteel904LPipeFittings from "./components/Materials/StainlessSteel/SSPipeFittings/StainlessSteel904LPipeFittings.jsx";




import StainlessSteel304ForgedFittings from "./components/Materials/StainlessSteel/SSfrodgefitting/StainlessSteel304ForgedFittings.jsx";
import StainlessSteel304LForgedFittings from "./components/Materials/StainlessSteel/SSfrodgefitting/StainlessSteel304LForgedFittings.jsx";
import StainlessSteel304HForgedFittings from "./components/Materials/StainlessSteel/SSfrodgefitting/StainlessSteel304HForgedFittings.jsx";
import StainlessSteel310SForgedFittings from "./components/Materials/StainlessSteel/SSfrodgefitting/StainlessSteel310SForgedFittings.jsx";
import StainlessSteel316ForgedFittings from "./components/Materials/StainlessSteel/SSfrodgefitting/StainlessSteel316ForgedFittings.jsx";
import StainlessSteel316LForgedFittings from "./components/Materials/StainlessSteel/SSfrodgefitting/StainlessSteel316LForgedFittings.jsx";
import StainlessSteel316HForgedFittings from "./components/Materials/StainlessSteel/SSfrodgefitting/StainlessSteel316HForgedFittings.jsx";
import StainlessSteel316TIForgedFittings from "./components/Materials/StainlessSteel/SSfrodgefitting/StainlessSteel316TIForgedFittings.jsx";
import StainlessSteel317317LForgedFittings from "./components/Materials/StainlessSteel/SSfrodgefitting/StainlessSteel317_317LForgedFittings.jsx";
import StainlessSteel321321HForgedFittings from "./components/Materials/StainlessSteel/SSfrodgefitting/StainlessSteel321_321HForgedFittings.jsx";
import StainlessSteel347347HForgedFittings from "./components/Materials/StainlessSteel/SSfrodgefitting/StainlessSteel347347HForgedFittings.jsx";
import StainlessSteel904LForgedFittings from "./components/Materials/StainlessSteel/SSfrodgefitting/StainlessSteel904LForgedFittings.jsx";




import StainlessSteel304Outlets from "./components/Materials/StainlessSteel/SSoutlets/StainlessSteel304Outlets.jsx";
import StainlessSteel304LOutlets from "./components/Materials/StainlessSteel/SSoutlets/StainlessSteel304LOutlets.jsx";
import StainlessSteel304HOutlets from "./components/Materials/StainlessSteel/SSoutlets/StainlessSteel304HOutlets.jsx";
import StainlessSteel310SOutlets from "./components/Materials/StainlessSteel/SSoutlets/StainlessSteel310SOutlets.jsx";
import StainlessSteel316Outlets from "./components/Materials/StainlessSteel/SSoutlets/StainlessSteel316Outlets.jsx";
import StainlessSteel316LOutlets from "./components/Materials/StainlessSteel/SSoutlets/StainlessSteel316LOutlets.jsx";
import StainlessSteel316HOutlets from "./components/Materials/StainlessSteel/SSoutlets/StainlessSteel316HOutlets.jsx";
import StainlessSteel316TIOutlets from "./components/Materials/StainlessSteel/SSoutlets/StainlessSteel316TIOutlets.jsx";
import StainlessSteel317317LOutlets from "./components/Materials/StainlessSteel/SSoutlets/StainlessSteel317_317LOutlets.jsx";
import StainlessSteel321321HOutlets from "./components/Materials/StainlessSteel/SSoutlets/StainlessSteel321_321HOutlets.jsx";
import StainlessSteel347347HOutlets from "./components/Materials/StainlessSteel/SSoutlets/StainlessSteel347_347HOutlets.jsx";
import StainlessSteel904LOutlets from "./components/Materials/StainlessSteel/SSoutlets/StainlessSteel904LOutlets.jsx";




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
        <Route path="/gallery" element={<Gallery />} />

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


        <Route path="/flanges" element={<FlangesPage />} />
        {/*................................ Flange............................ */}


        {/* ----------------------------------Fittings ----------------------- */}


        <Route path="/bulk-head-connector" element={<BulkheadConnector />} />
        <Route path="/buttweld-cross" element={<ButtweldCross />} />
        <Route path="/buttweld-elbow" element={<ButtweldElbow />} />
        <Route path="/buttweld-end-caps" element={<ButtweldEndCaps />} />
        <Route path="/buttweld-reducer" element={<ButtweldReducer />} />
        <Route path="/buttweld-stub-ends" element={<ButtweldStubEnds />} />
        <Route path="/buttweld-tee" element={<ButtweldTee />} />
        <Route path="/male-connector" element={<MaleConnector />} />
        <Route path="/tube-tee" element={<TubeTee />} />
        <Route path="/tube-union" element={<TubeUnion />} />
        <Route path="/valves" element={<Valves />} />



        <Route path="/fittings" element={<FittingsPage />} />
        <Route path="/forged-threaded-fitting" element={<ForgedFittingPage />} />
        <Route path="/buttweld-fittings" element={<ButtweldFittingPage />} />
        <Route path="/olets-fittings" element={<OletsFittingPage />} />








        <Route path="/45-degree-elbow" element={<Degree45/>}/>
        <Route path="/90-degree-elbow" element={<Degree90/>}/>
        <Route path="/cross" element={<Cross/>}/>
        <Route path="/coupling" element={<Coupling/>}/>
        <Route path="/union" element={<Union/>}/>
        <Route path="/adapters" element={<Adapters/>}/>
        <Route path="/bushing" element={<Bushing/>}/>
        <Route path="/hex-nipple" element={<HexNipple/>}/>




        <Route path="/buttweld-45-degree-elbow" element={<Buttweld45/>}/>
        <Route path="/buttweld-90-degree-elbow" element={<Buttweld90/>}/>
        <Route path="/buttweld-180-degree-elbow" element={<Buttweld180/>}/>
        <Route path="/concentric-reducers" element={<ConcentricReducers/>}/>
        <Route path="/eccentric-reducers" element={<EccentricReducers/>}/>
        <Route path="/end-caps" element={<Endcaps/>}/>
        <Route path="/equal-tee" element={<EqualTee/>}/>
        <Route path="/reducing-tee" element={<ReducingTee/>}/>
        <Route path="/stub-end" element={<Stubend/>}/>

        {/* ----------------------------------Fittings ----------------------- */}


        
        {/* ---------------------------------------------Olets------------------------------------------------ */}

        <Route path="/elbolets" element={<Elbolet/>} />
        <Route path="/laterolets" element={<Laterolet/>} />
        <Route path="/nippolets" element={<NippOlet/>} />
        <Route path="/sockolets" element={<SockOlets/>} />
        <Route path="/sweepolets" element={<SweepOlet/>} />
        <Route path="/threadolets" element={<ThreadOlets/>} />
        <Route path="/weldolets" element={<WeldOlets/>} />
        
        {/* ---------------------------------------------Olets------------------------------------------------ */}










        {/* ----------------------------------Fasteners ----------------------- */}



        {/* nuts-------------------- */}
        <Route path="/hex-nuts" element={<HexNuts />} />
        <Route path="/heavy-hex-nuts" element={<HeavyHexNuts />} />
        <Route path="/lock-nuts" element={<LockNuts />} />
        <Route path="/castel-nuts" element={<CastleNuts />} />
        <Route path="/flange-nuts" element={<FlangeNuts />} />

        {/* nuts-------------------- */}
        <Route path="/header-plug" element={<HeaderPlug/>} />



        <Route path="/stud-bolts" element={<StudBolts />} />
        <Route path="/hex-bolts" element={<HexBolts />} />
        <Route path="/foundation-bolts" element={<FoundationBolt />} />
        <Route path="/anchor-bolts" element={<AnchorBolts />} />

        {/* washers-------------------- */}
        <Route path="/standard-washers" element={<StandarsWashers />} />
        <Route path="/spring-washers" element={<SpringWashers />} />
        <Route path="/hv-washers" element={<HvWashers />} />





        <Route path="/fastners" element={<FastnerPage />} />
        <Route path="/bolts" element={<BoltsPage />} />
        <Route path="/nuts" element={<NutsPage />} />
        <Route path="/washers" element={<WashersPage />} />



        {/* ----------------------------------Fasteners ----------------------- */}


        {/* ------------------------------------Plates--------------------------------- */}
        <Route path="/aluminium-plates" element={<AluminiumPlates />} />
        <Route path="/brass-plates" element={<BrassPlates />} />
        <Route path="/bronze-plates" element={<BronzePlates />} />
        <Route path="/composite-plates" element={<CompositePlates />} />
        <Route path="/copper-plates" element={<CopperPlates />} />
        <Route path="/nickel-plates" element={<NickelPlates />} />
        <Route path="/plastic-plates" element={<PlasticPlates />} />
        <Route path="/steel-plates" element={<SteelPlates />} />

        {/* ------------------------------------Plates--------------------------------- */}
        {/* ------------------------------------Gaskets--------------------------------- */}

        <Route path="/monel-gasket" element={<MonelGasket />} />
        <Route path="/duplex-steel-gasket" element={<DuplexSteelGasket />} />
        <Route path="/soft-iron-gasket" element={<SoftIronGasket />} />
        <Route path="/titanium-gasket" element={<TitaniumGasket />} />



        <Route path="/spiral-wound" element={<SpiralWound />} />
        <Route path="/ring-joint" element={<RingJoint />} />
        <Route path="/non-metallic" element={<NonMetallic />} />
        <Route path="/metallic" element={<Metallic />} />
        <Route path="/gaskets" element={<GasketsPage />} />

        {/* ------------------------------------GAskets--------------------------------- */}


        {/* ----------------------------------------Round Bars-------------------------------------- */}
        <Route path="/brass-roundbars" element={<BrassRoundBars />} />
        <Route path="/bronze-roundbars" element={<BronzeRoundBars />} />
        <Route path="/composite-roundbars" element={<CompositeRoundBars />} />
        <Route path="/copper-roundbars" element={<CopperRoundBars />} />
        <Route path="/nickel-roundbars" element={<NickelRoundBars />} />
        <Route path="/plastic-roundbars" element={<PlasticRoundBars />} />
        <Route path="/steel-roundbars" element={<SteelRoundBars />} />
        <Route path="/zinc-roundbars" element={<ZincRoundBars />} />
        <Route path="/aluminium-roundbars" element={<AluminiumRoundBars />} />

        {/* ----------------------------------------Round Bars-------------------------------------- */}



        {/* ---------------------------------------------materials------------------------------------------------ */}
        <Route path="/materials" element={<Materials />} />
        <Route path="/materials-alloy-steel" element={<AlloySteel />} />
        <Route path="/astm-a193-grb7-bolts" element={<ASTMA193GRB7Bolts />} />





        <Route path="/astm-a193-grb7-mbolts" element={<ASTMA193GRB7MBolts />} />
        <Route path="/astm-a193-grb16-bolts" element={<ASTMA193GRB16Bolts />} />
        <Route path="/astm-a320-grl7-fasteners" element={<ASTMA320GRL7Fasteners />} />
        <Route path="/alloy-steel-2h-2hm-fasteners" element={<AlloySteel2H2HMFasteners />} />
        <Route path="/alloy-steel-b8-fasteners" element={<AlloySteelB8Fasteners />} />
        <Route path="/alloy-steel-b8m-fasteners" element={<AlloySteelB8MFasteners />} />
        <Route path="/alloy-steel-b6-fasteners" element={<AlloySteelB6Fasteners />} />



        <Route path="/alloy-steel-a182-f1-flanges" element={<AlloySteelA182F1Flanges />} />
        <Route path="/alloy-steel-a182-f5-flanges" element={<AlloySteelA182F5Flanges />} />
        <Route path="/alloy-steel-a182-f9-flanges" element={<AlloySteelA182F9Flanges />} />
        <Route path="/alloy-steel-a182-f11-flanges" element={<AlloySteelA182F11Flanges />} />
        <Route path="/alloy-steel-a182-f12-flanges" element={<AlloySteelA182F12Flanges />} />
        <Route path="/alloy-steel-a182-f22-flanges" element={<AlloySteelA182F22Flanges />} />
        <Route path="/alloy-steel-a182-f91-flanges" element={<AlloySteelA182F91Flanges />} />


        <Route path="/alloy-steel-a234-wp1-pipe-fittings" element={<AlloySteelA234WP1PipeFittings />} />
        <Route path="/alloy-steel-a234-wp5-pipe-fittings" element={<AlloySteelA234WP5PipeFittings />} />
        <Route path="/alloy-steel-a234-wp9-pipe-fittings" element={<AlloySteelA234WP9PipeFittings />} />
        <Route path="/alloy-steel-a234-wp11-pipe-fittings" element={<AlloySteelA234WP11PipeFittings />} />
        <Route path="/alloy-steel-a234-wp12-pipe-fittings" element={<AlloySteelA234WP12PipeFittings />} />
        <Route path="/alloy-steel-a234-wp22-pipe-fittings" element={<AlloySteelA234WP22PipeFittings />} />
        <Route path="/alloy-steel-a234-wp91-pipe-fittings" element={<AlloySteelA234WP91PipeFittings />} />



        <Route path="/alloy-steel-a182-f1-forged-fittings" element={<AlloySteelA182F1ForgedFittings />} />
        <Route path="/alloy-steel-a182-f5-forged-fittings" element={<AlloySteelA182F5ForgedFittings />} />
        <Route path="/alloy-steel-a182-f9-forged-fittings" element={<AlloySteelA182F9ForgedFittings />} />
        <Route path="/alloy-steel-a182-f11-forged-fittings" element={<AlloySteelA182F11ForgedFittings />} />
        <Route path="/alloy-steel-a182-f12-forged-fittings" element={<AlloySteelA182F12ForgedFittings />} />
        <Route path="/alloy-steel-a182-f22-forged-fittings" element={<AlloySteelA182F22ForgedFittings />} />
        <Route path="/alloy-steel-a182-f91-forged-fittings" element={<AlloySteelA182F91ForgedFittings />} />


        <Route path="/alloy-steel-a182-f1-outlets" element={<AlloySteelA182F1Outlets />} />
        <Route path="/alloy-steel-a182-f5-outlets" element={<AlloySteelA182F5Outlets />} />
        <Route path="/alloy-steel-a182-f9-outlets" element={<AlloySteelA182F9Outlets />} />
        <Route path="/alloy-steel-a182-f11-outlets" element={<AlloySteelA182F11Outlets />} />
        <Route path="/alloy-steel-a182-f12-outlets" element={<AlloySteelA182F12Outlets />} />
        <Route path="/alloy-steel-a182-f22-outlets" element={<AlloySteelA182F22Outlets />} />
        <Route path="/alloy-steel-a182-f91-outlets" element={<AlloySteelA182F91Outlets />} />


{/* ----------------------------carbon material--------------------------------------------------------------------- */}

<Route path="/materials-carbon-steel" element={<CarbonSteel />} />
<Route path="/carbon-steel-a234-wpb-pipe-fittings" element={<CarbonSteelA234WPBPipeFittings />} />
<Route path="/carbon-steel-wphy-fittings" element={<CarbonSteelWPHYFittings/>} />
<Route path="/carbon-steel-astm-a420-wpl6-fittings" element={<CarbonSteelASTMA420WPL6Fittings />} />
<Route path="/carbon-steel-a105n-forged-fittings" element={<CarbonSteelA105NForgedFittings />} />



<Route path="/carbon-steel-a105n-flanges" element={<CarbonSteelA105NFlanges />} />
<Route path="/carbon-steel-awwa-flanges" element={<CarbonSteelAWWAFlanges />} />
<Route path="/carbon-steel-astm-a350-lf2-flanges" element={<CarbonSteelASTMA350LF2Flanges />} />
<Route path="/sa-516-gr-60-70-spectacle-blind-flange" element={<SA516Gr6070SpectacleBlindFlange />} />

{/* ----------------------------carbon material--------------------------------------------------------------------- */}

{/* ----------------------------ss material--------------------------------------------------------------------- */}

<Route path="/materials-stainless-steel" element={<StainlessSteel />} />

<Route path="/stainless-steel-304-304l-fasteners" element={<StainlessSteel304304LFasteners />} />
<Route path="/stainless-steel-310-310s-fasteners" element={<StainlessSteel310310SFasteners />} />
<Route path="/stainless-steel-316-316l-fasteners" element={<StainlessSteel316316LFasteners />} />
<Route path="/stainless-steel-904l-fasteners" element={<StainlessSteel904LFasteners />} />
<Route path="/astm-a193-grb8m-bolts" element={<ASTMA193GRB8MBolts />} />
<Route path="/astm-a193-grb8-bolts" element={<ASTMA193GRB8Bolts />} />




<Route path="/stainless-steel-304-flanges" element={<StainlessSteel304Flanges />} />
<Route path="/stainless-steel-304l-flanges" element={<StainlessSteel304LFlanges />} />
<Route path="/stainless-steel-304h-flanges" element={<StainlessSteel304HFlanges />} />
<Route path="/stainless-steel-310s-flanges" element={<StainlessSteel310SFlanges />} />
<Route path="/stainless-steel-316-flanges" element={<StainlessSteel316Flanges />} />
<Route path="/stainless-steel-316l-flanges" element={<StainlessSteel316LFlanges />} />
<Route path="/stainless-steel-316h-flanges" element={<StainlessSteel316HFlanges />} />
<Route path="/stainless-steel-316ti-flanges" element={<StainlessSteel316TIFlanges />} />
<Route path="/stainless-steel-317-317l-flanges" element={<StainlessSteel317317LFlanges />} />
<Route path="/stainless-steel-321-321h-flanges" element={<StainlessSteel321321HFlanges />} />
<Route path="/stainless-steel-347-347h-flanges" element={<StainlessSteel347347HFlanges />} />
<Route path="/stainless-steel-904l-flanges" element={< StainlessSteel904LFlanges/>} />



<Route path="/stainless-steel-304-pipe-fittings" element={<StainlessSteel304PipeFittings/>} />
<Route path="/stainless-steel-304l-pipe-fittings" element={<StainlessSteel304LPipeFittings/>} />
<Route path="/stainless-steel-304h-pipe-fittings" element={<StainlessSteel304HPipeFittings/>} />
<Route path="/stainless-steel-310s-pipe-fittings" element={<StainlessSteel310SPipeFittings/>} />
<Route path="/stainless-steel-316-pipe-fittings" element={<StainlessSteel316PipeFittings/>} />
<Route path="/stainless-steel-316l-pipe-fittings" element={<StainlessSteel316LPipeFittings/>} />
<Route path="/stainless-steel-316h-pipe-fittings" element={<StainlessSteel316HPipeFittings/>} />
<Route path="/stainless-steel-316ti-pipe-fittings" element={<StainlessSteel316TIPipeFittings/>} />
<Route path="/stainless-steel-317-317l-pipe-fittings" element={<StainlessSteel317317LPipeFittings/>} />
<Route path="/stainless-steel-321-321h-pipe-fittings" element={<StainlessSteel321321HPipeFittings/>} />
<Route path="/stainless-steel-347-347h-pipe-fittings" element={<StainlessSteel347347HPipeFittings/>} />
<Route path="/stainless-steel-904l-pipe-fittings" element={<StainlessSteel904LPipeFittings/>} />







<Route path="/stainless-steel-304-forged-fittings" element={< StainlessSteel304ForgedFittings/>} />
<Route path="/stainless-steel-304l-forged-fittings" element={< StainlessSteel304LForgedFittings/>} />
<Route path="/stainless-steel-304h-forged-fittings" element={< StainlessSteel304HForgedFittings/>} />
<Route path="/stainless-steel-310s-forged-fittings" element={< StainlessSteel310SForgedFittings/>} />
<Route path="/stainless-steel-316-forged-fittings" element={< StainlessSteel316ForgedFittings/>} />
<Route path="/stainless-steel-316l-forged-fittings" element={< StainlessSteel316LForgedFittings/>} />
<Route path="/stainless-steel-316h-forged-fittings" element={< StainlessSteel316HForgedFittings/>} />
<Route path="/stainless-steel-316ti-forged-fittings" element={< StainlessSteel316TIForgedFittings/>} />
<Route path="/stainless-steel-317-317l-forged-fittings" element={< StainlessSteel317317LForgedFittings/>} />
<Route path="/stainless-steel-321-321h-forged-fittings" element={< StainlessSteel321321HForgedFittings/>} />
<Route path="/stainless-steel-347-347h-forged-fittings" element={< StainlessSteel347347HForgedFittings/>} />
<Route path="/stainless-steel-904l-forged-fittings" element={< StainlessSteel904LForgedFittings/>} />




<Route path="/stainless-steel-304-outlets" element={< StainlessSteel304Outlets/>} />
<Route path="/stainless-steel-304l-outlets" element={< StainlessSteel304LOutlets/>} />
<Route path= "/stainless-steel-304h-outlets" element={< StainlessSteel304HOutlets/>} />
<Route path= "/stainless-steel-310s-outlets"  element={< StainlessSteel310SOutlets/>} />
<Route path="/stainless-steel-316-outlets" element={< StainlessSteel316Outlets/>} />
<Route path="/stainless-steel-316l-outlets" element={< StainlessSteel316LOutlets/>} />
<Route path= "/stainless-steel-316h-outlets"  element={< StainlessSteel316HOutlets/>} />
<Route path="/stainless-steel-316ti-outlets" element={< StainlessSteel316TIOutlets/>} />
<Route path="/stainless-steel-317-317l-outlets" element={< StainlessSteel317317LOutlets/>} />
<Route path= "/stainless-steel-321-321h-outlets" element={< StainlessSteel321321HOutlets/>} />
<Route path="/stainless-steel-347-347h-outlets" element={< StainlessSteel347347HOutlets/>} />
<Route path="/stainless-steel-904l-outlets"element={< StainlessSteel904LOutlets/>} />


{/* ----------------------------ss material--------------------------------------------------------------------- */}

{/* ----------------------------------------duplex material----------------------------------------------------------- */}

<Route path="/materials-duplex-steel" element={<DuplexSteel />} />
<Route path="/duplex-steel-uns-s31803-s32205-pipe-fittings" element={<DuplexSteelUNSS31803S32205PipeFittings />} />
<Route path="/duplex-steel-uns-s31803-s32205-forged-fittings" element={<DuplexSteelUNSS31803S32205ForgedFittings />} />
<Route path="/duplex-steel-uns-s31803-s32205-flanges" element={<DuplexSteelUNSS31803S32205Flanges />} />
<Route path="/duplex-steel-uns-s31803-s32205-fasteners" element={<DuplexSteelUNSS31803S32205Fasteners />} />

{/* ----------------------------------------duplex material----------------------------------------------------------- */}

{/* --------------------------exotic----------- */}
<Route path="/materials-exotic-steel" element={<Exotic />} />






<Route path="/nickel-alloy-200-201-pipe-fittings" element={<NickelAlloy200201PipeFittings />} />
<Route path="/nickel-alloy-200-201-forged-fittings" element={<NickelAlloy200201ForgedFittings />} />
<Route path="/monel-400-k500-pipe-fittings" element={<Monel400K500PipeFittings />} />
<Route path="/monel-400-k500-forged-fittings" element={<Monel400K500ForgedFittings />} />
<Route path="/hastelloy-c22-pipe-fittings" element={<HastelloyC22PipeFittings />} />
<Route path="/hastelloy-c276-pipe-fittings" element={<HastelloyC276PipeFittings />} />
<Route path="/hastelloy-c22-forged-fittings" element={<HastelloyC22ForgedFittings />} />
<Route path="/hastelloy-c276-forged-fittings" element={<HastelloyC276ForgedFittings />} />
<Route path="/inconel-600-pipe-fittings" element={<Inconel600PipeFittings />} />
<Route path="/inconel-601-pipe-fittings" element={<Inconel601PipeFittings />} />
<Route path="/inconel-625-pipe-fittings" element={<Inconel625PipeFittings />} />
<Route path="/inconel-600-forged-fittings" element={<Inconel600ForgedFittings />} />
<Route path="/inconel-601-forged-fittings" element={<Inconel601ForgedFittings />} />
<Route path="/inconel-625-forged-fittings" element={<Inconel625ForgedFittings />} />




<Route path="/nickel-alloy-200-201-flanges" element={<NickelAlloy200201Flanges />} />
<Route path="/monel-400-k500-flanges" element={<Monel400K500Flanges />} />
<Route path="/hastelloy-c22-flanges" element={<HastelloyC22Flanges />} />
<Route path="/hastelloy-c276-flanges" element={<HastelloyC276Flanges />} />
<Route path="/inconel-600-flanges" element={<Inconel600Flanges />} />
<Route path="/inconel-601-flanges" element={<Inconel601Flanges />} />
<Route path="/inconel-625-flanges" element={<Inconel625Flanges />} />





<Route path="/nickel-alloy-200-201-fasteners" element={<NickelAlloy200201Fasteners />} />
<Route path="/monel-400-k500-fasteners" element={<Monel400K500Fasteners />} />
<Route path="/hastelloy-c22-fasteners" element={<HastelloyC22Fasteners />} />
<Route path="/hastelloy-c276-fasteners" element={<HastelloyC276Fasteners />} />
<Route path="/inconel-600-fasteners" element={<Inconel600Fasteners />} />
<Route path="/inconel-601-fasteners" element={<Inconel601Fasteners />} />
<Route path="/inconel-625-fasteners" element={<Inconel625Fasteners />} />









{/* --------------------------exotic----------- */}




        {/* ---------------------------------------------materials------------------------------------------------ */}








      </Routes>

    </>
  );
};

export default App;
