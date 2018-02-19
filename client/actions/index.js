export function selectBranch(branch) {
  console.log('branch selected', branch.title);
  return {
    type: "BRANCH_SELECTED",
    payload: branch,
  };
};

export function selectTab(tab) {
  console.log('tab selected', tab.tab_name);
  return {
    type: "TAB_SELECTED",
    payload: tab,
  }
}

export function toggleModal(branch) {
  console.log('modal toggled', branch);
  return {
    type: "MODAL_TOGGLED",
    payload: branch,
  }
}
