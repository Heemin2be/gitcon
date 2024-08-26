// Objects_party.js
var Desc_space = {
  write_explain: function write_explain(obj, _description) {
    obj.descript = _description;
    obj.explanation = function () {
      console.log(this.descript);
    };
  }
};
