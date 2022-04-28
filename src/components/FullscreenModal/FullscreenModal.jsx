import {
	ModalContainer,
	ModalWrapper,
	CrossIconContainer,
	ImgConatiner
} from './FullscreenModal.elements';
import CloseIcon from '../../assets/img/close-icon.svg'

const FullscreenModal = (props) => {
	const { show, closeModal, imgDetail } = props;

	return (
		<ModalWrapper show={show}>
			<ModalContainer>
				<CrossIconContainer onClick={closeModal}>
					<img src={CloseIcon} alt="close" />
				</CrossIconContainer>
				<ImgConatiner>
					<img src={imgDetail} alt="image" />
				</ImgConatiner>
			</ModalContainer>
		</ModalWrapper>
	)
}

export default FullscreenModal;