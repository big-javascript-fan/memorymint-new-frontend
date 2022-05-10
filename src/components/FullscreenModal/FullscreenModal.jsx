import {
	ModalContainer,
	ModalWrapper,
	CrossIconContainer,
	ImgConatiner
} from './FullscreenModal.elements';
import CloseIcon from '../../assets/img/close-icon.svg'

const FullscreenModal = (props) => {
	const { show, closeModal, imgDetail, type } = props;

	return (
		<ModalWrapper show={show}>
			<ModalContainer>
				<CrossIconContainer onClick={closeModal}>
					<img src={CloseIcon} alt="close" />
				</CrossIconContainer>
				<ImgConatiner>
				{ type === 'image' ?
					<img src={imgDetail} alt="Memorial" style={{ width: '80%' }} />
					: imgDetail
				}
				</ImgConatiner>
			</ModalContainer>
		</ModalWrapper>
	)
}

export default FullscreenModal;