
export default class Modal {
  constructor ( type, data ) {
    this.type = type;
    console.log( data );
    this.createModal( data );
  }

  createModal ( data ) {
    this.data = data;
    const parentModal = document.createElement( 'DIV' );
    parentModal.id = 'custom-modal';
    parentModal.classList.add( 'show', 'd-flex', 'justify-content-center', 'align-items-center' );
    document.body.appendChild( parentModal );
    this.modalChildrenElems( parentModal );
    document.body.style.overflow = 'hidden';
  }

  modalChildrenElems ( parentModal ) {
    this.parentModal = parentModal;
    const childrenModal = document.createElement( 'div' );
    childrenModal.classList.add( 'children-modal' );
    this.parentModal.appendChild( childrenModal );
    this.modalHead( childrenModal );
  }

  modalType ( headText ) {
    this.headText = headText;
    if ( this.type === 'lyric' ) {
      this.headText.innerText = `${this.music} Sözleri`;
    } else if ( this.type === 'your-best' ) {
      this.headText.innerText = `${this.data.bigCover.artist} - ${this.data.bigCover.songName} Şarkısı`;
    }
  }

  modalHead ( childrenModal ) {
    this.childrenModal = childrenModal;
    // head Wrapper
    const head = document.createElement( 'div' );
    head.classList.add( 'modal-head' );
    this.childrenModal.appendChild( head );
    // Head Text..
    const headText = document.createElement( 'h3' );
    headText.classList.add( 'h-100', 'd-flex', 'justify-content-center', 'align-items-center', 'text-white' );
    // type re-edited
    this.modalType( headText );
    head.appendChild( headText );
    // Close Button
    const closeButton = document.createElement( 'i' );
    closeButton.classList.add( 'material-icons', 'fs-24' );
    closeButton.innerText = 'cancel';
    head.appendChild( closeButton );
    this.modalBody( childrenModal );
    closeButton.addEventListener( 'click', ( e ) => { this.closeModalProgress( e ); } );
  }

  modalBody ( childrenModal ) {
    this.childrenModal = childrenModal;
    const modalBody = document.createElement( 'div' );
    modalBody.classList.add( 'modal-body' );
    this.childrenModal.appendChild( modalBody );
  }

  closeModalProgress ( e ) {
    this.event = e.currentTarget;
    this.customModal = document.getElementById( 'custom-modal' );
    console.log( this.event );
    document.body.style.overflow = 'visible';
    this.customModal.parentNode.removeChild( this.customModal );
  }
}
