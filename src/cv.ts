class CV {
  
  private _fullname!: string;
  public get fullname() : string {
    return this._fullname;
  }
  public set fullname(v : string) {
    this._fullname = v;
  }
  
  constructor() {

  }

  public toJSON() {
    return {
      fullname: this._fullname,
    }
  }
}

export default CV;