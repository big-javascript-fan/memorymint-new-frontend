import React, { Suspense, useState, useRef, useEffect } from "react";
import {
	Container,
	Img,
	TitleIconContainer,
	Title,
	PriceDetailContainer,
	Tag,
	PriceContainer,
	SaleContainer,
	Overlay,
	OverlayContainer,
	ImgContainer,
	Button,
} from "./ProductCard.elements";
import FullscreenModal from "../FullscreenModal/FullscreenModal";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import PreviewImg from '../../assets/img/gallery/3dpreview.jpeg';
import EthIcon from "../../components/common/icons/EthIcon";

function ModelHair(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/hair.glb");

  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    Object.keys(actions).map(key => {
      return actions[key].play();
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
      return actions[key].play();
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
      return actions[key].play();
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

const ProductCard = ({ item, title, id }) => {
	const [show, setShow] = useState(false);
	const [show3d, set3dShow] = useState(false);
	const [currentImg, setCurrentImg] = useState('');
	const [current3dModel, setCurrent3dModel] = useState(null);

	const closeModal = () => {
		setShow(false);
	};

	const showModal = (imgUrl) => {
		setShow(true);
		setCurrentImg(imgUrl)
	}

	const close3dModal = () => {
		set3dShow(false);
	};

	const show3dModal = () => {
		set3dShow(true);
	}

	const handleClick = () => {
		if (item.type === 'image') {
			showModal(item.img)
		} else {
			if (id === 1) {
				setCurrent3dModel(
					model3dSection(<ModelHair />)
				)
			} else if (id === 2) {
				setCurrent3dModel(
					model3dSection(<ModelKiss />)
				)
			} else {
				setCurrent3dModel(
					model3dSection(<ModelEye />)
				)
			}
			show3dModal()
		}
	}

	const model3dSection = (children) => {
		return (
			<div className="gltf-content">
				<Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
					<ambientLight intensity={1} />
					<Suspense fallback={null}>
						{ children }
					</Suspense>
					<OrbitControls />
				</Canvas>
			</div>
		)
	}

	return (
		<Container>
			<ImgContainer>
				<Img src={item.type === 'image' ? item.img : PreviewImg} />
				<OverlayContainer>
					<Overlay>
						<Button onClick={handleClick}>{item.type !== 'image' && '3d '}Preview</Button>
					</Overlay>
				</OverlayContainer>
			</ImgContainer>
			<TitleIconContainer>
				<Title>{title}</Title>
			</TitleIconContainer>
			<PriceDetailContainer>
				<SaleContainer
					style={{ borderRight: "1px solid gray", paddingRight: "20px" }}
				>
					<Tag>Pre-Sale</Tag>
					<PriceContainer>
						<EthIcon style={{ padding: "7px" }} />
						<span style={{ fontSize: "22px", padding: "7px" }}>0.7</span>
						<span style={{ fontSize: "16px" }}>ETH/66</span>
					</PriceContainer>
				</SaleContainer>

				<SaleContainer style={{ paddingLeft: "20px" }}>
					<Tag>General-Sale</Tag>
					<PriceContainer>
						<EthIcon style={{ padding: "7px" }} />
						<span style={{ fontSize: "22px", padding: "7px" }}>0.8</span>
						<span style={{ fontSize: "16px" }}>ETH/266</span>
					</PriceContainer>
				</SaleContainer>
			</PriceDetailContainer>
			<FullscreenModal show={show} closeModal={closeModal} imgDetail={currentImg} type="image" />
			<FullscreenModal show={show3d} closeModal={close3dModal} imgDetail={current3dModel} type="3d" />
		</Container>
	);
};

export default ProductCard;
