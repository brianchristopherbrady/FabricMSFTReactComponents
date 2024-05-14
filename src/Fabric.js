import "./App.css";
import {
  Wizard,
  WizardStep,
  WizardPanel,
  LoadingButton,
  MultiViewGroup,
  MultiViewController,
  MultiView,
  TeachingBubble,
} from "@fabric-msft/fabric-react";
import { Text, Button } from "@fabric-msft/fluent-react";
import { FluentProvider } from "@fluentui/react-components";
import { fabricLightTheme } from "@fabric-msft/theme";
import {
  Dismiss20Regular,
  Lightbulb20Regular,
  QuestionCircle20Regular,
} from "@fluentui/react-icons";
import React, { useCallback } from "react";

function Fabric() {
  const next = useCallback(() => {
    const wizard = document.getElementById("wizard");
    wizard.next();
  }, []);

  const previous = useCallback(() => {
    const wizard = document.getElementById("wizard");
    wizard.previous();
  }, []);

  const complete = () => {
    const wizard = document.getElementById("wizard");
    wizard.completeStep();
  };

  const reset = useCallback((index) => {
    const wizard = document.getElementById("wizard");
    wizard.reset();
  }, []);
  return (
    <FluentProvider theme={fabricLightTheme}>
      <div className="container">
        <div className="flex column">
          <div style={{ height: "500px", border: "2px solid lightgray" }}>
            <Wizard id="wizard">
              <Text slot="title" size="200" weight="regular">
                <span>Wizard Title</span>
              </Text>
              <Button
                tabIndex={0}
                slot="button"
                icon-only
                appearance="transparent"
                size="small"
                name="lightbulb"
                aria-label="Lightbulb"
              >
                <Lightbulb20Regular />
              </Button>
              <Button
                tabIndex={0}
                slot="button"
                icon-only
                appearance="transparent"
                size="small"
                name="question"
                aria-label="Question"
              >
                <QuestionCircle20Regular />
              </Button>
              <Button
                tabIndex={0}
                slot="button"
                icon-only
                appearance="transparent"
                size="small"
                name="dismiss"
                aria-label="Dismiss"
              >
                <Dismiss20Regular />
              </Button>
              <WizardStep slot="step">
                <div slot="title">Step 1</div>
                <div slot="details">Step 1 details</div>
              </WizardStep>
              <WizardStep slot="step">
                <div slot="title">Step 2</div>
                <div slot="details">Step 2 details</div>
              </WizardStep>
              <WizardStep slot="step">
                <div slot="title">Step 3</div>
                <div slot="details">Step 3 details</div>
              </WizardStep>
              <WizardPanel slot="panel">
                <Text slot="title" size="400" weight="semibold">
                  <span>Panel 1</span>
                </Text>
                <div>
                  <Text size="400" weight="semibold" block={true}>
                    <span>Wizard Panel 1 Content</span>
                  </Text>
                </div>
                <div slot="footer">
                  <div>
                    <Button tabIndex={0} onClick={next}>
                      Next Step
                    </Button>
                  </div>
                  <div>
                    <Button tabIndex={0} onClick={reset} name="reset wizard">
                      Reset Wizard
                    </Button>
                    <Button
                      appearance="primary"
                      tabIndex={0}
                      id="button-complete-step-0"
                      onClick={complete}
                      name="complete step one"
                    >
                      Complete Step
                    </Button>
                  </div>
                </div>
              </WizardPanel>
              <WizardPanel slot="panel">
                <Text slot="title" size="400" weight="semibold">
                  <span>Panel 1</span>
                </Text>
                <div slot="footer">
                  <div>
                    <Button
                      tabIndex={0}
                      onClick={previous}
                      name="previous step"
                    >
                      Previous Step
                    </Button>
                    <Button tabIndex={0} onClick={next} name="next step">
                      Next Step
                    </Button>
                  </div>
                  <div>
                    <Button tabIndex={0} onClick={reset} name="reset wizard">
                      Reset Wizard
                    </Button>
                    <Button
                      appearance="primary"
                      tabIndex={0}
                      onClick={complete}
                      id="button-complete-step-1"
                      name="complete step two"
                    >
                      Complete Step
                    </Button>
                  </div>
                </div>
              </WizardPanel>
              <WizardPanel slot="panel">
                <Text slot="title" size="400" weight="semibold">
                  <span>Panel 1</span>
                </Text>
                <div>
                  <Text size="400" weight="semibold" block={true}>
                    <span>Wizard Panel 1 Content</span>
                  </Text>
                </div>
                <div slot="footer">
                  <div>
                    <Button
                      tabIndex={0}
                      onClick={previous}
                      name="previous step"
                    >
                      Previous Step
                    </Button>
                    <Button tabIndex={0} onClick={next} name="next step">
                      Next Step
                    </Button>
                  </div>
                  <div>
                    <Button tabIndex={0} onClick={reset} name="reset wizard">
                      Reset Wizard
                    </Button>
                    <Button
                      appearance="primary"
                      tabIndex={0}
                      onClick={complete}
                      id="button-complete-step-2"
                      name="complete step three"
                    >
                      Complete Step
                    </Button>
                  </div>
                </div>
              </WizardPanel>
            </Wizard>
          </div>
          <div
            style={{
              height: "500px",
              border: "2px solid lightgray",
              position: "relative",
            }}
          >
            <div>
              <MultiViewGroup>
                <MultiViewController>
                  <Lightbulb20Regular />
                </MultiViewController>
                <MultiViewController>
                  <QuestionCircle20Regular />
                </MultiViewController>
                <MultiViewController>
                  <Dismiss20Regular />
                </MultiViewController>
                <MultiView>Content 1</MultiView>
                <MultiView>Content 2</MultiView>
                <MultiView>Content 3</MultiView>
              </MultiViewGroup>
            </div>
          </div>
          <div style={{ height: "100px", border: "2px solid lightgray" }}>
            <div>
              <LoadingButton
                tabIndex={0}
                appearance="primary"
                onClick={next}
                name="next step"
                loading
              >
                Next Step
              </LoadingButton>
            </div>
          </div>
          {/* <div style={{ height: "100px", border: "2px solid lightgray" }}>
            <div>
              <Button id="tb" tabIndex={0} appearance="primary">Target</Button>
              <TeachingBubble target="tb" open>
                <Button
                  slot="close"
                  aria-label="close button"
                  icon-only
                  appearance="transparent"
                  size="small"
                >
                  <Dismiss20Regular />
                </Button>
                <Text>
                  <span>
                    This is an example implementation of the Teaching Bubble
                    component.
                  </span>
                </Text>
                <div slot="heading">Title</div>
                <div slot="footer">
                  <Button appearance="outline">
                    <span>Previous</span>
                  </Button>
                  <span>1 / 1</span>
                  <Button>
                    <span>Next</span>
                  </Button>
                </div>
              </TeachingBubble>
            </div>
          </div> */}
        </div>
      </div>
    </FluentProvider>
  );
}

export default Fabric;
