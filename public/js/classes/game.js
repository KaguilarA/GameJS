class Game extends PIXI.Application {
  constructor() {
    super({
      width: window.innerWidth,
      height: window.innerHeight
    });
    this.getInitialData();
    
  }

  // Getters and Setters

  get initialData() {
    return this._initialData;
  }

  set initialData(pNewInitialData) {
    const initialData = pNewInitialData;
    this._initialData = initialData;
  }

  // P

  get loaderData() {
    return this.initialData.loader;
  }

  getInitialData() {
    serviceConector.doRequest(`/data/visual.config.json`).then(res => {
      const initialData = res;
      this.initialData = initialData;
      this.doLoaderAction();
    });
  }

  doLoaderAction() {
    for (const loaderId in this.loaderData) {
      if (this.loaderData.hasOwnProperty(loaderId)) {
        const loaderLink = this.loaderData[loaderId];
        this.loader.add(loaderId, loaderLink);
      }
    }
    this.loader.load((loader, res) => {
      this.onAssetsLoaded(loader, res);
    });
  }

  onAssetsLoaded(loader, res) {
    const data = {
      asset: res.main
    }
    // create a spine boy
    const main = new MainCharacter(data);

    // set the position
    main.x = this.screen.width / 2;
    main.y = this.screen.height;

    main.scale.set(0.30);

    this.stage.addChild(main);

    PIXI.utils.skipHello();
  }
}