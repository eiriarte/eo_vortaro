var err = initInstall("Esperanta Vortaro", "eo-EO@dictionaries.addons.mozilla.org", "1.0.2");
if (err != SUCCESS)
    cancelInstall();

var fProgram = getFolder("Program");
err = addDirectory("", "eo-EO@dictionaries.addons.mozilla.org",
		   "dictionaries", fProgram, "dictionaries", true);
if (err != SUCCESS)
    cancelInstall();

performInstall();