class MainCharacter extends BaseCharacter {
  constructor(pMainCharacterData) {
    super(pMainCharacterData);
    this.createMainEvents();
  }

  createMainEvents() {
    // $(document).ready(() => {
    $(document).on('keydown', (event) => {
      const keyCode = event.keyCode;
      const singleAnimations = ["aim", "death", "jump", "portal"];
      const loopAnimations = ["hoverboard", "idle", "run", "shoot", "walk"];
      switch (keyCode) {
        case 37:
          alert('Left key pressed');
          break;
        case 38:
          this.spine.state.setAnimation(
            0,
            `jump`,
            false
          );
          setTimeout(() => {
            this.spine.state.setAnimation(
              0,
              `idle`,
              false
            );
          }, 1250)
          break;
        case 39:
          this.spine.state.setAnimation(
            0,
            `walk`,
            loopAnimations.includes("walk")
          );
          break;
        case 40:
          alert('Down key pressed');
          break;
      }
        console.log('event: ', event);

      });
    // });
  }
}