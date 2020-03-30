class BaseCharacter extends PIXI.Sprite {
  constructor(pBaseCharacterData) {
    const baseCharacterData = pBaseCharacterData;
    super();
    this.spine = new PIXI.spine.Spine(baseCharacterData.asset.spineData);
    this.addChild(this.spine);
    console.log(this);
  }

  get spine() {
    return this._spine;
  }

  set spine(pNewSpine) {
    const spine = pNewSpine;
    this._spine = spine;
  }
}