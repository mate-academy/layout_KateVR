'use strict';

import { initFaq } from "./faq";
import { initDropdown } from "./dropdown";
import { initForm, setActiveStep } from "./form";
import { initCardInputs } from "./cardInputs";
import { initSliderAbout } from "./sliderAbout";
import { initSpecsShown } from "./techSpecs";
import { initSliderHeader } from "./sliderHeader";
import { initVideoModal } from "./videoModal";

setActiveStep();
initFaq();
initDropdown();
initForm();
initCardInputs();
initSliderAbout();
initSpecsShown();
initSliderHeader();
initVideoModal();
