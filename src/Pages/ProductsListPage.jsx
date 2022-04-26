import React, { useEffect, useState, useRef, Suspense } from "react";
import SliderSection from "../components/SliderSection";
import SommerSection from "../components/SommerSection";
import SeriesSec from "../components/SeriesSec";
import RewardSec from "../components/RewardSec";
import RoadMapSec from "../components/RoadMapSec";
import { useEthers } from '@usedapp/core'
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { FullscreenImg } from '../components/fullscreenImg';
import HAIRPLAY1 from '../assets/img/gallery/HAIRPLAY1.png';
import HAIRPLAY2 from '../assets/img/gallery/HAIRPLAY2.png';
import HAIRPLAY3 from '../assets/img/gallery/HAIRPLAY3.png';
import HAIRPLAY4 from '../assets/img/gallery/HAIRPLAY4.png';
import HAIRPLAY5 from '../assets/img/gallery/HAIRPLAY5.png';
import MONKEYKISS1 from '../assets/img/gallery/MONKEYKISS1.png';
import MONKEYKISS2 from '../assets/img/gallery/MONKEYKISS2.png';
import MONKEYKISS3 from '../assets/img/gallery/MONKEYKISS3.png';
import MONKEYKISS4 from '../assets/img/gallery/MONKEYKISS4.png';
import MONKEYKISS5 from '../assets/img/gallery/MONKEYKISS5.png';
import THOSEEYES1 from '../assets/img/gallery/THOSEEYES1.png';
import THOSEEYES2 from '../assets/img/gallery/THOSEEYES2.png';
import THOSEEYES3 from '../assets/img/gallery/THOSEEYES3.png';
import THOSEEYES4 from '../assets/img/gallery/THOSEEYES4.png';
import THOSEEYES5 from '../assets/img/gallery/THOSEEYES5.png';
import ImgsViewer from 'react-images-viewer';
import "../assets/css/sales.scss"
import { Fullscreen3d } from "../components/fullscreen3d";
import Web3 from 'web3';
import { NFT_ABI } from "../contract/NFT";
import { toast } from 'react-toastify';
import { Loader } from "../components/loader";

const cardData ={
  title: 'MARCH 11, 2022',
  subtitles: [
    "SERIES B, featuring memories from Sommer's visit to Machu Picchu drops MARCH 11, 2022.",
  ]
}

function ModelHair(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/hair.glb");

  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    Object.keys(actions).map(key => {
      actions[key].play();
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}


function ModelKiss(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/kiss.glb");

  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    Object.keys(actions).map(key => {
      actions[key].play();
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

function ModelEye(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/eye.glb");

  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    Object.keys(actions).map(key => {
      actions[key].play();
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}
const ProductsListPage = () => {

  const [isShowFullscreenImg, setShowFullscreenImg] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isShowFullscreen3d, setShowFullscreen3d] = useState(false);
  const [selected3d, setSelected3d] = useState(null);
  const [isMinting, setIsMinting] = useState(false);
  const [hairAmount, setHairAmount] = useState(0);
  const [kissAmount, setKissAmount] = useState(0);
  const [eyesAmount, setEyesAmount] = useState(0);
  const [canMint, setCanMint] = useState(false);

  const { activateBrowserWallet, account, library } = useEthers()

  useEffect(() => {
    handleContractStatus();
  }, [account])

  const handleContractStatus = async () => {
    if (library) {
      const web3 = new Web3(library.provider);
      const contract = new web3.eth.Contract(NFT_ABI, '0xdFB95Fc9D00153e348c32A2cF4B120222ED3Aeb9');
  
      const presaleActive = await contract.methods.presaleActive().call();
      const publicSaleActive = await contract.methods.publicSaleActive().call();
  
      if (presaleActive || publicSaleActive) {
        setCanMint(true);
      }
    }
  }

  const handleMint = async (type) => {
    if(!account) {
      activateBrowserWallet();
    } else {
      let currentAmount = hairAmount;
      if(type === 2) {
        currentAmount = kissAmount;
      } else if (type === 3) {
        currentAmount = eyesAmount;
      }

      if (currentAmount > 0) {
        setIsMinting(true);
        try {
          const web3 = new Web3(library.provider);
          const contract = new web3.eth.Contract(NFT_ABI, '0xdFB95Fc9D00153e348c32A2cF4B120222ED3Aeb9');
          const price = await contract.methods.currentPrice().call();
          await contract.methods.mint(type, currentAmount).send({
            from: account,
            value: price * currentAmount
          });
          setIsMinting(false);
          toast("NFT minted successfully!", { type: "success" });
        } catch(e) {
          setIsMinting(false);
          toast("There is problem on minting, Please try again later!", { type: "error" });
        }
      } else {
        toast("Please input amount of NFT which you need to mint!", {
          type: "warning"
        });
      }
    }
  }

  const handleSelectImg = (img) => {
    setSelectedImg(img);
    setShowFullscreenImg(true);
  }
  const handleShowFullscreen3dModel = (type) => {
    let model = null;
    if (type === 'hair') {
      model = (
        <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <ModelHair />
          </Suspense>
          <OrbitControls />
        </Canvas>
        );
    } else if (type === 'kiss') {
      model = (
        <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <ModelKiss />
          </Suspense>
          <OrbitControls />
        </Canvas>
        );
    } else {
      model = (
        <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <ModelEye />
          </Suspense>
          <OrbitControls />
        </Canvas>
        );
    }
    setSelected3d(model);
    setShowFullscreen3d(true);
  }
  return (
    <>
      <SommerSection />
      <SeriesSec />
      <SliderSection title="Playing With My Hair" cards={[1,2,3,4,5,6]} />
      <SliderSection title="Monkey Kiss" cards={[1,2,3,4,5,6]} />
      <SliderSection title="Those Eyes" cards={[1,2,3,4,5,6]} />
      <RoadMapSec title="Roadmap for Future release" cardData={cardData}/>
      <RewardSec />

      { isShowFullscreenImg && 
        <FullscreenImg img={selectedImg} closeFullScreen={() => setShowFullscreenImg(false)} />
      }
      { isShowFullscreen3d && 
        <Fullscreen3d component={selected3d} closeFullScreen={() => setShowFullscreen3d(false)} />
      }
      { isMinting &&
        <Loader content="Mint in progress..." />
      }
    </>
  );
};

export default ProductsListPage;
