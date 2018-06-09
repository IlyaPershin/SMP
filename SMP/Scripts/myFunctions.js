﻿function show_value(x) {
    document.getElementById("slider_value").innerHTML = x;
}

function checkLength(reserve, halfProject) {
    if (reserve < halfProject * 0.05) return confirm('Внимание! Резервное время, отведённое на проект, очень мало. Это может привести к срыву сроков проекта. Вы уверены, что хотите оставить данное резервное время?');
    if (reserve > halfProject * 0.6) return confirm('Внимание! Резервное время, отведённое на проект, очень велико. Это может привести к тому, что задания не смогут ббыть вписаны в основное время проекта. Вы уверены, что хотите оставить данное резервное время?');
}

function checkLastWork(lastWork, reserve, halfProject) {
    console.log("lastWork");
    console.log(lastWork);
    console.log("reserve");
    console.log(reserve);
    console.log("halfProject");
    console.log(halfProject);
    if (reserve < halfProject * 0.05) return confirm('Внимание! Резервное время, отведённое на проект, очень мало. Это может привести к срыву сроков проекта. Вы уверены, что хотите оставить данное резервное время?');
    if (reserve > halfProject * 0.6) return confirm('Внимание! Резервное время, отведённое на проект, очень велико. Это может привести к тому, что задания не смогут ббыть вписаны в основное время проекта. Вы уверены, что хотите оставить данное резервное время?');
    if (lastWork < reserve) return confirm(lastWork + "Внимание! При увеличении резервного времени некоторые задачи попали в рамки резервного времени.");
}