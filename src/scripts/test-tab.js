// Minimal tab logic
const tabs = document.querySelectorAll('[role="tab"]')
const panels = {
    compute: document.getElementById('panel-compute'),
    storage: document.getElementById('panel-storage'),
    networking: document.getElementById('panel-networking'),
};
console.log("tabs: ",tabs);
console.log("panels: ",panels);

tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => x.setAttribute('aria-selected','false'));
    t.setAttribute('aria-selected','true');

    const id = t.dataset.key
    Object.values(panels).forEach(p => p.hidden = true);
    panels[id].hidden = false;
}));