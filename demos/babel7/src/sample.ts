class Sample {
  private x = 10;

  getX = () => this.x;

  setX = (newVal: number) => {
    this.x = newVal;
  };
}

export const x = new Sample();
export const y = { ...{ some: 'value' } };
