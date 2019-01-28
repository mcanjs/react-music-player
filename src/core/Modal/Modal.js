
export default class Modal {
  constructor ( type, data ) {
    this.type = type;
    this.createModal( data );
  }

  createModal ( data ) {
    this.data = data;
    const parentModal = document.createElement( 'DIV' );
    parentModal.id = 'custom-modal';
    parentModal.classList.add( 'show', 'd-flex', 'justify-content-center', 'align-items-center' );
    document.body.appendChild( parentModal );
    this.modalChildrenElems( parentModal );
  }

  modalChildrenElems ( parentModal ) {
    this.parentModal = parentModal;
    const childrenModal = document.createElement( 'div' );
    childrenModal.classList.add( 'children-modal' );
    this.parentModal.appendChild( childrenModal );
    this.modalHead( childrenModal );
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
    headText.innerText = `${this.music} Sözleri`;
    head.appendChild( headText );
    // Close Button
    const closeButton = document.createElement( 'i' );
    closeButton.classList.add( 'material-icons', 'fs-24' );
    closeButton.innerText = 'cancel';
    head.appendChild( closeButton );
    closeButton.addEventListener( 'click', ( e ) => { this.closeModalProgress( e ); } );
  }

  closeModalProgress ( e ) {
    this.event = e.currentTarget;
    console.log( this.event );
  }
}
