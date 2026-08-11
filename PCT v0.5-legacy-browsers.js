/***************** 
 * Pct V0.5 *
 *****************/


// store info about the experiment session:
let expName = 'PCT v0.5';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
    'sex (f/m/o)': 'f',
    'age': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'norm',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(instructions_1RoutineBegin());
flowScheduler.add(instructions_1RoutineEachFrame());
flowScheduler.add(instructions_1RoutineEnd());
flowScheduler.add(startRoutineBegin());
flowScheduler.add(startRoutineEachFrame());
flowScheduler.add(startRoutineEnd());
const block_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(block_1LoopBegin(block_1LoopScheduler));
flowScheduler.add(block_1LoopScheduler);
flowScheduler.add(block_1LoopEnd);



const block_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(block_2LoopBegin(block_2LoopScheduler));
flowScheduler.add(block_2LoopScheduler);
flowScheduler.add(block_2LoopEnd);



const block_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(block_3LoopBegin(block_3LoopScheduler));
flowScheduler.add(block_3LoopScheduler);
flowScheduler.add(block_3LoopEnd);



flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'images/stimuli_1(000).png', 'path': 'images/stimuli_1(000).png'},
    {'name': 'images/stimuli_2(001).png', 'path': 'images/stimuli_2(001).png'},
    {'name': 'images/stimuli_3(010).png', 'path': 'images/stimuli_3(010).png'},
    {'name': 'images/stimuli_4(011).png', 'path': 'images/stimuli_4(011).png'},
    {'name': 'images/stimuli_5(100).png', 'path': 'images/stimuli_5(100).png'},
    {'name': 'images/stimuli_6(101).png', 'path': 'images/stimuli_6(101).png'},
    {'name': 'images/stimuli_7(110).png', 'path': 'images/stimuli_7(110).png'},
    {'name': 'images/stimuli_8(111).png', 'path': 'images/stimuli_8(111).png'},
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'images/stimuli_1(000).png', 'path': 'images/stimuli_1(000).png'},
    {'name': 'images/stimuli_2(001).png', 'path': 'images/stimuli_2(001).png'},
    {'name': 'images/stimuli_3(010).png', 'path': 'images/stimuli_3(010).png'},
    {'name': 'images/stimuli_4(011).png', 'path': 'images/stimuli_4(011).png'},
    {'name': 'images/stimuli_5(100).png', 'path': 'images/stimuli_5(100).png'},
    {'name': 'images/stimuli_6(101).png', 'path': 'images/stimuli_6(101).png'},
    {'name': 'images/stimuli_7(110).png', 'path': 'images/stimuli_7(110).png'},
    {'name': 'images/stimuli_8(111).png', 'path': 'images/stimuli_8(111).png'},
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'images/stimuli_1(000).png', 'path': 'images/stimuli_1(000).png'},
    {'name': 'images/stimuli_2(001).png', 'path': 'images/stimuli_2(001).png'},
    {'name': 'images/stimuli_3(010).png', 'path': 'images/stimuli_3(010).png'},
    {'name': 'images/stimuli_4(011).png', 'path': 'images/stimuli_4(011).png'},
    {'name': 'images/stimuli_5(100).png', 'path': 'images/stimuli_5(100).png'},
    {'name': 'images/stimuli_6(101).png', 'path': 'images/stimuli_6(101).png'},
    {'name': 'images/stimuli_7(110).png', 'path': 'images/stimuli_7(110).png'},
    {'name': 'images/stimuli_8(111).png', 'path': 'images/stimuli_8(111).png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'images/stimuli_1(000).png', 'path': 'images/stimuli_1(000).png'},
    {'name': 'images/stimuli_2(001).png', 'path': 'images/stimuli_2(001).png'},
    {'name': 'images/stimuli_3(010).png', 'path': 'images/stimuli_3(010).png'},
    {'name': 'images/stimuli_4(011).png', 'path': 'images/stimuli_4(011).png'},
    {'name': 'images/stimuli_5(100).png', 'path': 'images/stimuli_5(100).png'},
    {'name': 'images/stimuli_6(101).png', 'path': 'images/stimuli_6(101).png'},
    {'name': 'images/stimuli_7(110).png', 'path': 'images/stimuli_7(110).png'},
    {'name': 'images/stimuli_8(111).png', 'path': 'images/stimuli_8(111).png'},
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcome_text;
var key_welcome;
var instructions_1Clock;
var text_instructions_1;
var key_instructions_1;
var startClock;
var text_start;
var key_resp;
var trials_trainingClock;
var fixation;
var stimuli_training;
var key_resp_training;
var feedback_trainingClock;
var text_feedback;
var endClock;
var end_text;
var key_end_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: '¡Gracias por participar!\n\nEl experimento de categorización visual tiene una fase de entrenamiento.\n\nDurante el entrenamiento, usted verá en la pantalla una serie de objetos esquemáticos (conocidos como símbolos ceremoniales) los cuales debe clasificar de acuerdo vaya aprendiendo.\n\nRecuerde que es importante mantener su atención durante todo el experimento. \n\nPresione ESPACIO para continuar',
    font: 'Arial',
    units: 'pix', 
    pos: [0, 0], draggable: false, height: 20,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_welcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_1"
  instructions_1Clock = new util.Clock();
  text_instructions_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_1',
    text: 'Instrucciones de entrenamiento:\n\nEste es un experimento interesado en cómo las personas mantienen la información en memoria.\n\nUsted verá una serie de símbolos ceremoniales con tres esferas. Cada esfera puede contener solo dos formas. Cada esfera estará siempre en la misma posición.\n\nEstos símbolos ceremoniales solamente pueden perteneces a dos categorías: La familia Z o la familia M.\n\nAl principio, usted tendrá que adivinar a qué familia cada símbolo ceremonial pertenece. Sin embargo, cada vez que usted presiona un botón, un mensaje en la pantalla le dirá si está correcto o equivocado. A pesar de que esta tarea es difícil, no hay trucos de por medio. Eventualmente, usted aprenderá a clasificar cada símbolo ceremonial.\n\nPresione la tecla del teclado Z si usted cree que el símbolo esquemático pertenece a la familia Z.\n\nPresione la tecla del teclado M si usted cree que el símbolo esquemático pertenece a la familia M.\n\nUsted tendrá 30 segundos para proveer una respuesta, de lo contrario un mensaje de Muy lento aparecerá en la pantalla.\n\nPresiones ESPACIO para continuar.\n',
    font: 'Arial',
    units: 'pix', 
    pos: [0, 0], draggable: false, height: 20,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_instructions_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "start"
  startClock = new util.Clock();
  text_start = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_start',
    text: 'Presione ESPACIO para comenzar con el experimento\n',
    font: 'Arial',
    units: 'pix', 
    pos: [0, 0], draggable: false, height: 20,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trials_training"
  trials_trainingClock = new util.Clock();
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', 
    vertices: 'cross', size:[0.03, 0.04],
    ori: 0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.03, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: 0, 
    interpolate: true, 
  });
  
  stimuli_training = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimuli_training', units : 'pix', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0, 0], 
    draggable: false,
    size : [600, 600],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp_training = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback_training"
  feedback_trainingClock = new util.Clock();
  text_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_feedback',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Gracias por colaborar en este experimento.\n\nPresione ESPACIO para finalizar\n',
    font: 'Arial',
    units: 'pix', 
    pos: [0, 0], draggable: false, height: 20,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_end_text = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var welcomeMaxDurationReached;
var _key_welcome_allKeys;
var welcomeMaxDuration;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    welcomeClock.reset();
    routineTimer.reset();
    welcomeMaxDurationReached = false;
    // update component parameters for each repeat
    key_welcome.keys = undefined;
    key_welcome.rt = undefined;
    _key_welcome_allKeys = [];
    psychoJS.experiment.addData('welcome.started', globalClock.getTime());
    welcomeMaxDuration = null
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_text);
    welcomeComponents.push(key_welcome);
    
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }
    
    
    // *key_welcome* updates
    if (t >= 3.0 && key_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_welcome.tStart = t;  // (not accounting for frame time here)
      key_welcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_welcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_welcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_welcome.clearEvents(); });
    }
    
    if (key_welcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_welcome.getKeys({keyList: ['space'], waitRelease: false});
      _key_welcome_allKeys = _key_welcome_allKeys.concat(theseKeys);
      if (_key_welcome_allKeys.length > 0) {
        key_welcome.keys = _key_welcome_allKeys[_key_welcome_allKeys.length - 1].name;  // just the last key pressed
        key_welcome.rt = _key_welcome_allKeys[_key_welcome_allKeys.length - 1].rt;
        key_welcome.duration = _key_welcome_allKeys[_key_welcome_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    welcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
    key_welcome.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_1MaxDurationReached;
var _key_instructions_1_allKeys;
var instructions_1MaxDuration;
var instructions_1Components;
function instructions_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions_1Clock.reset();
    routineTimer.reset();
    instructions_1MaxDurationReached = false;
    // update component parameters for each repeat
    key_instructions_1.keys = undefined;
    key_instructions_1.rt = undefined;
    _key_instructions_1_allKeys = [];
    psychoJS.experiment.addData('instructions_1.started', globalClock.getTime());
    instructions_1MaxDuration = null
    // keep track of which components have finished
    instructions_1Components = [];
    instructions_1Components.push(text_instructions_1);
    instructions_1Components.push(key_instructions_1);
    
    instructions_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_1' ---
    // get current time
    t = instructions_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions_1* updates
    if (t >= 0.0 && text_instructions_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_1.tStart = t;  // (not accounting for frame time here)
      text_instructions_1.frameNStart = frameN;  // exact frame index
      
      text_instructions_1.setAutoDraw(true);
    }
    
    
    // *key_instructions_1* updates
    if (t >= 3.0 && key_instructions_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instructions_1.tStart = t;  // (not accounting for frame time here)
      key_instructions_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instructions_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instructions_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instructions_1.clearEvents(); });
    }
    
    if (key_instructions_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instructions_1.getKeys({keyList: ['space'], waitRelease: false});
      _key_instructions_1_allKeys = _key_instructions_1_allKeys.concat(theseKeys);
      if (_key_instructions_1_allKeys.length > 0) {
        key_instructions_1.keys = _key_instructions_1_allKeys[_key_instructions_1_allKeys.length - 1].name;  // just the last key pressed
        key_instructions_1.rt = _key_instructions_1_allKeys[_key_instructions_1_allKeys.length - 1].rt;
        key_instructions_1.duration = _key_instructions_1_allKeys[_key_instructions_1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_1' ---
    instructions_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions_1.stopped', globalClock.getTime());
    key_instructions_1.stop();
    // the Routine "instructions_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var startMaxDurationReached;
var _key_resp_allKeys;
var startMaxDuration;
var startComponents;
function startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    startClock.reset();
    routineTimer.reset();
    startMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('start.started', globalClock.getTime());
    startMaxDuration = null
    // keep track of which components have finished
    startComponents = [];
    startComponents.push(text_start);
    startComponents.push(key_resp);
    
    startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start' ---
    // get current time
    t = startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_start* updates
    if (t >= 0.0 && text_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_start.tStart = t;  // (not accounting for frame time here)
      text_start.frameNStart = frameN;  // exact frame index
      
      text_start.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start' ---
    startComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('start.stopped', globalClock.getTime());
    key_resp.stop();
    // the Routine "start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var block_1;
function block_1LoopBegin(block_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'block_1'
    });
    psychoJS.experiment.addLoop(block_1); // add the loop to the experiment
    currentLoop = block_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    block_1.forEach(function() {
      snapshot = block_1.getSnapshot();
    
      block_1LoopScheduler.add(importConditions(snapshot));
      block_1LoopScheduler.add(trials_trainingRoutineBegin(snapshot));
      block_1LoopScheduler.add(trials_trainingRoutineEachFrame());
      block_1LoopScheduler.add(trials_trainingRoutineEnd(snapshot));
      block_1LoopScheduler.add(feedback_trainingRoutineBegin(snapshot));
      block_1LoopScheduler.add(feedback_trainingRoutineEachFrame());
      block_1LoopScheduler.add(feedback_trainingRoutineEnd(snapshot));
      block_1LoopScheduler.add(block_1LoopEndIteration(block_1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function block_1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(block_1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function block_1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var block_2;
function block_2LoopBegin(block_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'block_2'
    });
    psychoJS.experiment.addLoop(block_2); // add the loop to the experiment
    currentLoop = block_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    block_2.forEach(function() {
      snapshot = block_2.getSnapshot();
    
      block_2LoopScheduler.add(importConditions(snapshot));
      block_2LoopScheduler.add(trials_trainingRoutineBegin(snapshot));
      block_2LoopScheduler.add(trials_trainingRoutineEachFrame());
      block_2LoopScheduler.add(trials_trainingRoutineEnd(snapshot));
      block_2LoopScheduler.add(feedback_trainingRoutineBegin(snapshot));
      block_2LoopScheduler.add(feedback_trainingRoutineEachFrame());
      block_2LoopScheduler.add(feedback_trainingRoutineEnd(snapshot));
      block_2LoopScheduler.add(block_2LoopEndIteration(block_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function block_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(block_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function block_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var block_3;
function block_3LoopBegin(block_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'block_3'
    });
    psychoJS.experiment.addLoop(block_3); // add the loop to the experiment
    currentLoop = block_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    block_3.forEach(function() {
      snapshot = block_3.getSnapshot();
    
      block_3LoopScheduler.add(importConditions(snapshot));
      block_3LoopScheduler.add(trials_trainingRoutineBegin(snapshot));
      block_3LoopScheduler.add(trials_trainingRoutineEachFrame());
      block_3LoopScheduler.add(trials_trainingRoutineEnd(snapshot));
      block_3LoopScheduler.add(feedback_trainingRoutineBegin(snapshot));
      block_3LoopScheduler.add(feedback_trainingRoutineEachFrame());
      block_3LoopScheduler.add(feedback_trainingRoutineEnd(snapshot));
      block_3LoopScheduler.add(block_3LoopEndIteration(block_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function block_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(block_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function block_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_trainingMaxDurationReached;
var _key_resp_training_allKeys;
var trials_trainingMaxDuration;
var trials_trainingComponents;
function trials_trainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trials_training' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trials_trainingClock.reset(routineTimer.getTime());
    routineTimer.add(31.500000);
    trials_trainingMaxDurationReached = false;
    // update component parameters for each repeat
    stimuli_training.setImage(Stimuli);
    key_resp_training.keys = undefined;
    key_resp_training.rt = undefined;
    _key_resp_training_allKeys = [];
    psychoJS.experiment.addData('trials_training.started', globalClock.getTime());
    trials_trainingMaxDuration = null
    // keep track of which components have finished
    trials_trainingComponents = [];
    trials_trainingComponents.push(fixation);
    trials_trainingComponents.push(stimuli_training);
    trials_trainingComponents.push(key_resp_training);
    
    trials_trainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trials_trainingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trials_training' ---
    // get current time
    t = trials_trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    
    // *stimuli_training* updates
    if (t >= 1.5 && stimuli_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimuli_training.tStart = t;  // (not accounting for frame time here)
      stimuli_training.frameNStart = frameN;  // exact frame index
      
      stimuli_training.setAutoDraw(true);
    }
    
    frameRemains = 1.5 + 30 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stimuli_training.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stimuli_training.setAutoDraw(false);
    }
    
    
    // *key_resp_training* updates
    if (t >= 1.5 && key_resp_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_training.tStart = t;  // (not accounting for frame time here)
      key_resp_training.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_training.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_training.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_training.clearEvents(); });
    }
    
    frameRemains = 1.5 + 30 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_training.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_training.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_training.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_training.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _key_resp_training_allKeys = _key_resp_training_allKeys.concat(theseKeys);
      if (_key_resp_training_allKeys.length > 0) {
        key_resp_training.keys = _key_resp_training_allKeys[_key_resp_training_allKeys.length - 1].name;  // just the last key pressed
        key_resp_training.rt = _key_resp_training_allKeys[_key_resp_training_allKeys.length - 1].rt;
        key_resp_training.duration = _key_resp_training_allKeys[_key_resp_training_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_training.keys == CorrAns) {
            key_resp_training.corr = 1;
        } else {
            key_resp_training.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trials_trainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trials_trainingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trials_training' ---
    trials_trainingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trials_training.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_training.keys === undefined) {
      if (['None','none',undefined].includes(CorrAns)) {
         key_resp_training.corr = 1;  // correct non-response
      } else {
         key_resp_training.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_training.corr, level);
    }
    psychoJS.experiment.addData('key_resp_training.keys', key_resp_training.keys);
    psychoJS.experiment.addData('key_resp_training.corr', key_resp_training.corr);
    if (typeof key_resp_training.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_training.rt', key_resp_training.rt);
        psychoJS.experiment.addData('key_resp_training.duration', key_resp_training.duration);
        routineTimer.reset();
        }
    
    key_resp_training.stop();
    if (trials_trainingMaxDurationReached) {
        trials_trainingClock.add(trials_trainingMaxDuration);
    } else {
        trials_trainingClock.add(31.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback_trainingMaxDurationReached;
var msg;
var msgColor;
var feedback_trainingMaxDuration;
var feedback_trainingComponents;
function feedback_trainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_training' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedback_trainingClock.reset(routineTimer.getTime());
    routineTimer.add(1.500000);
    feedback_trainingMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from setMsg
    if ((! key_resp_training.keys)) {
        msg = "Too slow!";
        msgColor = "red";
    } else {
        if (key_resp_training.corr) {
            msg = "Correct";
            msgColor = "green";
        } else {
            msg = "Incorrect";
            msgColor = "red";
        }
    }
    
    text_feedback.setColor(new util.Color(msgColor));
    text_feedback.setText(msg);
    psychoJS.experiment.addData('feedback_training.started', globalClock.getTime());
    feedback_trainingMaxDuration = null
    // keep track of which components have finished
    feedback_trainingComponents = [];
    feedback_trainingComponents.push(text_feedback);
    
    feedback_trainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_trainingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_training' ---
    // get current time
    t = feedback_trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_feedback* updates
    if (t >= 0.0 && text_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_feedback.tStart = t;  // (not accounting for frame time here)
      text_feedback.frameNStart = frameN;  // exact frame index
      
      text_feedback.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_feedback.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_trainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_trainingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_training' ---
    feedback_trainingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback_training.stopped', globalClock.getTime());
    if (feedback_trainingMaxDurationReached) {
        feedback_trainingClock.add(feedback_trainingMaxDuration);
    } else {
        feedback_trainingClock.add(1.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var _key_end_text_allKeys;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endClock.reset();
    routineTimer.reset();
    endMaxDurationReached = false;
    // update component parameters for each repeat
    key_end_text.keys = undefined;
    key_end_text.rt = undefined;
    _key_end_text_allKeys = [];
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    endComponents.push(key_end_text);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }
    
    
    // *key_end_text* updates
    if (t >= 1.0 && key_end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_end_text.tStart = t;  // (not accounting for frame time here)
      key_end_text.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_end_text.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_end_text.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_end_text.clearEvents(); });
    }
    
    if (key_end_text.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_end_text.getKeys({keyList: ['space'], waitRelease: false});
      _key_end_text_allKeys = _key_end_text_allKeys.concat(theseKeys);
      if (_key_end_text_allKeys.length > 0) {
        key_end_text.keys = _key_end_text_allKeys[_key_end_text_allKeys.length - 1].name;  // just the last key pressed
        key_end_text.rt = _key_end_text_allKeys[_key_end_text_allKeys.length - 1].rt;
        key_end_text.duration = _key_end_text_allKeys[_key_end_text_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    key_end_text.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
