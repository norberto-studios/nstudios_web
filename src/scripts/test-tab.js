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
    const key = t.dataset.key;

    tabs.forEach(x => x.setAttribute('aria-selected','false'));
    t.setAttribute('aria-selected','true');

    // tabs.forEach(x => {
    //     x.setAttribute('aria-selected', 'false');
    //     x.classList.remove('bg-[#1a1b21]', 'text-white', 'shadow-[inset_0_0_0_1px_#2b2d35]');
    //     x.classList.add('text-[#cfd1d6]');
    // });
    //
    // t.setAttribute('aria-selected', 'true');
    // t.classList.add('bg-[#1a1b21]', 'text-white', 'shadow-[inset_0_0_0_1px_#2b2d35]');
    // t.classList.remove('text-[#cfd1d6]');

    // tabs.forEach(x => x.setAttribute('aria-selected','false'));
    // t.setAttribute('aria-selected','true');

    console.log("dataset: ",t)


    Object.entries(panels).forEach(([k, panel]) => {
        panel.classList.toggle('hidden', k !== key);
    });
}));