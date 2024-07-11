import { ASSET_TYPE_ENUMERATION, ASSET_TYPE_FOLDER, ASSET_TYPE_RECORD } from "../../domain/constants.js";

class AssetsListElement extends HTMLElement {
    listItemBuilders = {
        [ASSET_TYPE_ENUMERATION]: () => {},
        [ASSET_TYPE_FOLDER]: () => {},
        [ASSET_TYPE_RECORD]: () => {},
    };

    constructor() {
        super();
    }
}

customElements.define('assets-list', AssetsListElement);
