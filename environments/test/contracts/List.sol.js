// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"key","type":"uint256"}],"name":"getLength","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"uint256"}],"name":"getAll","outputs":[{"name":"","type":"uint256[]"}],"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"uint256"},{"name":"_data","type":"uint256[]"}],"name":"setList","outputs":[],"type":"function"}],
    binary: "60606040526101d3806100126000396000f3606060405236156100355760e060020a60003504630986e647811461004a5780633c077a4814610065578063b8c58128146100d5575b602b5b60408051918252519081900360200190f35b6100386004356000818152600260205260409020545b919050565b6101616004356000606081815282825260026020908152604092839020805491820260a090810190945260808281529293909190828280156100c957602002820191906000526020600020905b8160005054815260200190600101908083116100b2575b50505050509050610060565b6024803560048181013560208102608081810160405260608381526101ab9685359660449592949101928291849080828437505060008881526002602090815260408220875181548183558285529290932097995097508601959094509250905082156101ad579160200282015b828111156101ad578251826000505591602001919060010190610143565b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600f02600301f1509050019250505060405180910390f35b005b506101c99291505b808211156101cf57600081556001016101b5565b50505050565b509056",
    unlinked_binary: "60606040526101d3806100126000396000f3606060405236156100355760e060020a60003504630986e647811461004a5780633c077a4814610065578063b8c58128146100d5575b602b5b60408051918252519081900360200190f35b6100386004356000818152600260205260409020545b919050565b6101616004356000606081815282825260026020908152604092839020805491820260a090810190945260808281529293909190828280156100c957602002820191906000526020600020905b8160005054815260200190600101908083116100b2575b50505050509050610060565b6024803560048181013560208102608081810160405260608381526101ab9685359660449592949101928291849080828437505060008881526002602090815260408220875181548183558285529290932097995097508601959094509250905082156101ad579160200282015b828111156101ad578251826000505591602001919060010190610143565b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600f02600301f1509050019250505060405180910390f35b005b506101c99291505b808211156101cf57600081556001016101b5565b50505050565b509056",
    address: "0x501f63ffb9452dfdb5a6c2a36290ced9d8be5329",
    generated_with: "2.0.6",
    contract_name: "List"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("List error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("List error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("List error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("List error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.List = Contract;
  }

})();
