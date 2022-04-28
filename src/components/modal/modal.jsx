import {
	ModalContainer,
	ModalWrapper,
	CrossIconContainer,
	ModalBorder
} from './modal.elements';
import { CloseIcon } from '../../assets/img/close-icon.svg'

const Modal = (props) => {
	const { children, show, closeModal } = props;

	return (
		<ModalWrapper show={show}>
			<ModalBorder>
				<ModalContainer>
					<CrossIconContainer onClick={closeModal}>
						<img src={CloseIcon.default} alt="close" />
					</CrossIconContainer>
					{children}
				</ModalContainer>
			</ModalBorder>
		</ModalWrapper>
	);
};

export default Modal;
