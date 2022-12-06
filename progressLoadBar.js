  const skillboard = {
    VUE: 0.40,
    HTMLCSS: 0.65,
    GIT: 0.50,
    JSON: 0.42, 
    AJAX: 0.39, 
    JS: 0.62, 
    DOM: 0.71,
    Communication: 0.88,
    Adaptation: 0.73,
    CritThinking: 0.69,
    AnalyzeThinking: 0.61,
    TroubleSolving: 0.89,
    TimeManagment: 0.74,
    SelfMotivation: 0.59,
    Russian: 0.93,
    English: 0.57
}

for (let skill in skillboard) {
    let DOMLineBar = new ProgressBar.Line(`#${skill}`, {
        color: '#45c9a5',
        strokeWidth: 6,
        trailWidth: 5,
        from: { color: '#45c9a5' },
        to: { color: '#00ddad' },
        text: {
          value: '0',
          className: 'progress-text',
          style: {
            color: '#cdfcd7',
            position: 'relative',
            textAlign: 'right',
            padding: 0,
            margin: 0,
            transform: null,
          },
        },
        step: (state, shape) => {
          shape.path.setAttribute('stroke', state.color);
          shape.setText(Math.round(shape.value() * 100) + ' %');
        },
      });
    
      DOMLineBar.animate(skillboard[skill], {
        duration: 3500,
      });
}