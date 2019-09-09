Page({
  onLoad() {
    this.initStars(0, 5);
    this.initProblems();
  },

  initStars(initialCount, totalStarCount) {
    let initialStars = [];
    for (let i = 1; i <= totalStarCount; i++) {
      if (i <= initialCount) initialStars.push(1);
      else initialStars.push(0);
    }

    this.setData({
      stars: initialStars
    });
  },

  initProblems() {
    this.setData({
      problemsList: ["问题A", "问题B", "问题C", "问题D", "问题E", "问题F"],
      clickedIndexArr: [false, false, false, false, false],
    })
  },

  handleProblemClick(e) {
    let idx = e.currentTarget.dataset.clickedindex; // 选中的index
    let clickedIndexArr = this.data.clickedIndexArr; // collected起来的index
    clickedIndexArr[idx] = !clickedIndexArr[idx];
    this.setData({
      clickedIndexArr: clickedIndexArr
    })
  },

  handleStarsChange(e) {
    let currentStars = this.data.stars;
    let clickedIdx = e.currentTarget.dataset.idx; // 点选第几颗星
    for (let i = 0; i < currentStars.length; i++) {
      if (i <= clickedIdx) currentStars[i] = 1;
      else currentStars[i] = 0;
    }

    this.setData({
      stars: currentStars,
      slidingOut: true
    })
  },

  handleTextareaChange(e) {
     this.setData({
       feedback: e.detail.value
     })
  },

  submitFeedback() {
    this.setData({
      clickedSubmitButton: true
    });

    setTimeout(() => {
      console.log(this.data.feedback)
      this.setData({
        clickedSubmitButton: false
      });
    }, 2000)
  }
})