export default class ModuleCheck {
  constructor(data) {
    this.dt = data;
    console.log("obj created")
    console.log(data)
  }
  funcA() {
    console.log("funcA  called")
    console.log(parseInt(this.dt))
  }
}