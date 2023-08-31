import Modal from 'components/Modal';
import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  ImageGalleryItemImage,
  ImageGalleryItemLargeImage,
  ImageGalleryItemStyle,
} from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.data;
    const { showModal } = this.state;
    return (
      <>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ImageGalleryItemLargeImage src={largeImageURL} alt={tags} />
          </Modal>
        )}

        <ImageGalleryItemStyle>
          <ImageGalleryItemImage
            src={webformatURL}
            alt={tags}
            onClick={this.toggleModal}
          />
        </ImageGalleryItemStyle>
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string.isRequired,
  }),
};
