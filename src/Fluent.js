import {
  Accordion,
  AccordionItem,
  Text,
  Button,
  AnchorButton,
  ToggleButton,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Badge,
  Checkbox,
  CounterBadge,
  RadioGroup,
  Radio,
  CompoundButton,
  Dialog,
  Divider,
  Image,
  Label,
  ProgressBar,
  Slider,
  Spinner,
  Switch,
  TabPanel,
  Tab,
  Tabs,
  TextInput,
} from "@fabric-msft/fluent-react";
import { FluentProvider } from "@fluentui/react-components";
import { fabricLightTheme } from "@fabric-msft/theme";
import { Person20Regular } from "@fluentui/react-icons";

function Fluent() {
  const toggleDialog = (id) => {
    const dialog = document.getElementById(id);
    if (!dialog.open) {
      dialog.show();
    } else {
      dialog.hide();
    }
  };

  return (
    <FluentProvider theme={fabricLightTheme}>
      <div className="container">
        <div className="example-container">
          <Label size="large">Accordion</Label>
          <div className="row">
            <div className="column">
              <Label weight="semibold">Accordion multiple expand mode</Label>
              <Accordion>
                <AccordionItem>
                  <span slot="heading">Accordion header 1</span>
                  <div style={{ margin: "6px", fontSize: "14px" }}>
                    Accordion panel 1
                  </div>
                </AccordionItem>
                <AccordionItem>
                  <span slot="heading">Accordion header 2</span>
                  <div style={{ margin: "6px", fontSize: "14px" }}>
                    Accordion panel 2
                  </div>
                </AccordionItem>
                <AccordionItem>
                  <span slot="heading">Accordion header 3</span>
                  <div style={{ margin: "6px", fontSize: "14px" }}>
                    Accordion panel 3
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="column">
              <Label weight="semibold">Accordion single expand mode</Label>
              <Accordion expand-mode="single">
                <AccordionItem>
                  <span slot="heading">Accordion header 1</span>
                  <div style={{ margin: "6px", fontSize: "14px" }}>
                    Accordion panel 1
                  </div>
                </AccordionItem>
                <AccordionItem>
                  <span slot="heading">Accordion header 2</span>
                  <div style={{ margin: "6px", fontSize: "14px" }}>
                    Accordion panel 2
                  </div>
                </AccordionItem>
                <AccordionItem>
                  <span slot="heading">Accordion header 3</span>
                  <div style={{ margin: "6px", fontSize: "14px" }}>
                    Accordion panel 3
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="column">
              <Label weight="semibold">Accordion onChange event</Label>
              <Accordion>
                <AccordionItem>
                  <span slot="heading">Accordion header 1</span>
                  <div style={{ margin: "6px", fontSize: "14px" }}>
                    Accordion panel 1
                  </div>
                </AccordionItem>
                <AccordionItem>
                  <span slot="heading">Accordion header 2</span>
                  <div style={{ margin: "6px", fontSize: "14px" }}>
                    Accordion panel 2
                  </div>
                </AccordionItem>
                <AccordionItem>
                  <span slot="heading">Accordion header 3</span>
                  <div style={{ margin: "6px", fontSize: "14px" }}>
                    Accordion panel 3
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Button</Label>
          <div className="column">
            <Label weight="semibold">Button appearance variations</Label>
            <div className="row">
              <Button appearance="primary">Primary button</Button>
              <Button appearance="secondary">Secondary button</Button>
              <Button appearance="outline">Outline button</Button>
              <Button appearance="subtle">Subtle button</Button>
              <Button appearance="transparent">Transparent button</Button>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Button shape variations</Label>
            <div className="row">
              <Button shape="circular">Circular button</Button>
              <Button shape="rounded">Rounded button</Button>
              <Button shape="square">Square button</Button>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Button size variations</Label>
            <div className="row">
              <Button size="small">Small button</Button>
              <Button size="medium">Medium button</Button>
              <Button size="large">Large button</Button>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Compound button</Label>
          <div className="column">
            <Label weight="semibold">
              Compound button appearance variations
            </Label>
            <div className="row">
              <CompoundButton appearance="primary">
                Primary button
                <span slot="description">Secondary content</span>
              </CompoundButton>
              <CompoundButton appearance="secondary">
                Secondary button
                <span slot="description">Secondary content</span>
              </CompoundButton>
              <CompoundButton appearance="outline">
                Outline button
                <span slot="description">Secondary content</span>
              </CompoundButton>
              <CompoundButton appearance="subtle">
                Subtle button
                <span slot="description">Secondary content</span>
              </CompoundButton>
              <CompoundButton appearance="transparent">
                Transparent button
                <span slot="description">Secondary content</span>
              </CompoundButton>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Compound button shape variations</Label>
            <div className="row">
              <CompoundButton shape="circular">
                Circular button
                <span slot="description">Secondary content</span>
              </CompoundButton>
              <CompoundButton shape="rounded">
                Rounded button
                <span slot="description">Secondary content</span>
              </CompoundButton>
              <CompoundButton shape="square">
                Square button
                <span slot="description">Secondary content</span>
              </CompoundButton>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Compound button size variations</Label>
            <div className="row">
              <CompoundButton size="small">Small button</CompoundButton>
              <CompoundButton size="medium">Medium button</CompoundButton>
              <CompoundButton size="large">Large button</CompoundButton>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Menu button</Label>

          <div className="column">
            <Label weight="semibold">Menu button appearance variations</Label>
            <div className="row">
              <MenuButton appearance="primary">Primary button</MenuButton>
              <MenuButton appearance="secondary">Secondary button</MenuButton>
              <MenuButton appearance="outline">Outline button</MenuButton>
              <MenuButton appearance="subtle">Subtle button</MenuButton>
              <MenuButton appearance="transparent">
                Transparent button
              </MenuButton>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Menu button shape variations</Label>
            <div className="row">
              <MenuButton shape="circular">Circular button</MenuButton>
              <MenuButton shape="rounded">Rounded button</MenuButton>
              <MenuButton shape="square">Square button</MenuButton>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Menu button size variations</Label>
            <div className="row">
              <MenuButton size="small">Small button</MenuButton>
              <MenuButton size="medium">Medium button</MenuButton>
              <MenuButton size="large">Large button</MenuButton>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Toggle button</Label>

          <div className="column">
            <Label weight="semibold">Toggle button appearance variations</Label>
            <div className="row">
              <ToggleButton appearance="primary">Primary button</ToggleButton>
              <ToggleButton appearance="secondary">
                Secondary button
              </ToggleButton>
              <ToggleButton appearance="outline">Outline button</ToggleButton>
              <ToggleButton appearance="subtle">Subtle button</ToggleButton>
              <ToggleButton appearance="transparent">
                Transparent button
              </ToggleButton>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Toggle button shape variations</Label>
            <div className="row">
              <ToggleButton shape="circular">Circular button</ToggleButton>
              <ToggleButton shape="rounded">Rounded button</ToggleButton>
              <ToggleButton shape="square">Square button</ToggleButton>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Toggle button size variations</Label>
            <div className="row">
              <ToggleButton size="small">Small button</ToggleButton>
              <ToggleButton size="medium">Medium button</ToggleButton>
              <ToggleButton size="large">Large button</ToggleButton>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Toggle button checked</Label>
            <div className="row">
              <ToggleButton checked={true}>Checked button</ToggleButton>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Anchor button</Label>

          <div className="column">
            <Label weight="semibold">Anchor button appearance variations</Label>
            <div className="row">
              <AnchorButton appearance="primary" href="#">
                Primary button
              </AnchorButton>
              <AnchorButton appearance="secondary" href="#">
                Secondary button
              </AnchorButton>
              <AnchorButton appearance="outline" href="#">
                Outline button
              </AnchorButton>
              <AnchorButton appearance="subtle" href="#">
                Subtle button
              </AnchorButton>
              <AnchorButton appearance="transparent" href="#">
                Transparent button
              </AnchorButton>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Anchor button shape variations</Label>
            <div className="row">
              <AnchorButton shape="circular" href="#">
                Circular button
              </AnchorButton>
              <AnchorButton shape="rounded" href="#">
                Rounded button
              </AnchorButton>
              <AnchorButton shape="square" href="#">
                Square button
              </AnchorButton>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Anchor button size variations</Label>
            <div className="row">
              <AnchorButton size="small" href="#">
                Small button
              </AnchorButton>
              <AnchorButton size="medium" href="#">
                Medium button
              </AnchorButton>
              <AnchorButton size="large" href="#">
                Large button
              </AnchorButton>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Menu list</Label>
          <div className="column">
            <Label weight="semibold">Menu list default</Label>
            <div className="row">
              <MenuList>
                <MenuItem>Menu item 1</MenuItem>
                <MenuItem>Menu item 2</MenuItem>
                <MenuItem>Menu item 3</MenuItem>
              </MenuList>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Menu list submenu</Label>
            <div className="row">
              <MenuList>
                <MenuItem>
                  Menu item 1
                  <MenuList slot="submenu">
                    <MenuItem>Subitem 1</MenuItem>
                    <MenuItem>Subitem 2</MenuItem>
                  </MenuList>
                </MenuItem>
                <MenuItem>Menu item 2</MenuItem>
                <MenuItem>Menu item 3</MenuItem>
              </MenuList>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Menu list icons</Label>
            <div className="row">
              <MenuList>
                <MenuItem>
                  <span slot="start">
                    <svg
                      fill="currentColor"
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.92 2.87a2.97 2.97 0 014.2 4.21l-.66.67-4.2-4.2.66-.68zm-1.38 1.38l-8 8c-.32.33-.55.74-.65 1.2l-.88 3.94a.5.5 0 00.6.6l3.92-.87c.47-.1.9-.34 1.24-.68l7.98-7.98-4.2-4.21z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  Menu item 1
                  <MenuList slot="submenu">
                    <MenuItem>
                      <span slot="start">
                        <svg
                          fill="currentColor"
                          aria-hidden="true"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.82 6.5h5.93c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v9c0 1.2-.93 2.17-2.1 2.24l-.15.01H4.25c-1.2 0-2.17-.93-2.24-2.1L2 17.75V10.5h6.4c.4-.04.77-.18 1.1-.4l.15-.12 4.17-3.48zM8.21 4c.46 0 .9.14 1.28.4l.16.12 2.1 1.75-3.06 2.56-.09.06a.75.75 0 01-.29.1l-.1.01H2V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h3.96z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      Subitem 1
                    </MenuItem>
                    <MenuItem>Subitem 2</MenuItem>
                  </MenuList>
                </MenuItem>
                <MenuItem>
                  <span slot="start">
                    <svg
                      fill="currentColor"
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.94 4.05a.75.75 0 00-1.38-.6l-5.5 12.5a.75.75 0 101.38.6l5.5-12.5zm1.35 9.8a.75.75 0 01-.13-1.06L16.3 10l-2.14-2.8a.75.75 0 011.18-.9l2.5 3.24c.21.27.21.65 0 .92l-2.5 3.25a.75.75 0 01-1.05.13zm-8.58-7.7c.33.26.39.73.13 1.06L3.7 10l2.14 2.8a.75.75 0 11-1.18.9l-2.5-3.24a.75.75 0 010-.92l2.5-3.25a.75.75 0 011.05-.13z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  Menu item 2
                </MenuItem>
                <MenuItem>
                  <span slot="start">
                    <svg
                      fill="currentColor"
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.82 6.5h5.93c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v9c0 1.2-.93 2.17-2.1 2.24l-.15.01H4.25c-1.2 0-2.17-.93-2.24-2.1L2 17.75V10.5h6.4c.4-.04.77-.18 1.1-.4l.15-.12 4.17-3.48zM8.21 4c.46 0 .9.14 1.28.4l.16.12 2.1 1.75-3.06 2.56-.09.06a.75.75 0 01-.29.1l-.1.01H2V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h3.96z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  Menu item 3
                </MenuItem>
              </MenuList>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Menu item</Label>
          <div className="column">
            <Label weight="semibold">Menu item default</Label>
            <div className="row">
              <MenuList>
                <MenuItem>Menu item</MenuItem>
              </MenuList>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Menu item disabled</Label>
            <div className="row">
              <MenuList>
                <MenuItem disabled>Menu item</MenuItem>
              </MenuList>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Menu item checkbox</Label>
            <div className="row">
              <MenuList>
                <MenuItem role="menuitemcheckbox">Menu item 1</MenuItem>
                <MenuItem role="menuitemcheckbox">Menu item 2</MenuItem>
              </MenuList>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Menu item radio</Label>
            <div className="row">
              <MenuList>
                <MenuItem role="menuitemradio">Menu item 1</MenuItem>
                <MenuItem role="menuitemradio">Menu item 2</MenuItem>
              </MenuList>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Avatar</Label>
          <div className="column">
            <Label weight="semibold">Avatar size variations</Label>
            <div className="row">
              <Avatar initials="jd" title="jd" size={16} />
              <Avatar initials="jd" title="jd" size={20} />
              <Avatar initials="jd" title="jd" size={24} />
              <Avatar initials="jd" title="jd" size={28} />
              <Avatar initials="jd" title="jd" size={32} />
              <Avatar initials="jd" title="jd" size={36} />
              <Avatar initials="jd" title="jd" size={40} />
              <Avatar initials="jd" title="jd" size={48} />
              <Avatar initials="jd" title="jd" size={56} />
              <Avatar initials="jd" title="jd" size={64} />
              <Avatar initials="jd" title="jd" size={72} />
              <Avatar initials="jd" title="jd" size={96} />
              <Avatar initials="jd" title="jd" size={120} />
              <Avatar initials="jd" title="jd" size={128} />
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Avatar color variations</Label>
            <div className="row">
              <Avatar initials="jd" title="jd" color="neutral" />
              <Avatar initials="jd" title="jd" color="brand" />
              <Avatar initials="jd" title="jd" color="colorful" />
              <Avatar initials="jd" title="jd" color="dark-red" />
              <Avatar initials="jd" title="jd" color="cranberry" />
              <Avatar initials="jd" title="jd" color="red" />
              <Avatar initials="jd" title="jd" color="pumpkin" />
              <Avatar initials="jd" title="jd" color="peach" />
              <Avatar initials="jd" title="jd" color="marigold" />
              <Avatar initials="jd" title="jd" color="gold" />
              <Avatar initials="jd" title="jd" color="brass" />
              <Avatar initials="jd" title="jd" color="brown" />
              <Avatar initials="jd" title="jd" color="forest" />
              <Avatar initials="jd" title="jd" color="seafoam" />
              <Avatar initials="jd" title="jd" color="dark-green" />
              <Avatar initials="jd" title="jd" color="light-teal" />
              <Avatar initials="jd" title="jd" color="teal" />
              <Avatar initials="jd" title="jd" color="steel" />
              <Avatar initials="jd" title="jd" color="blue" />
              <Avatar initials="jd" title="jd" color="royal-blue" />
              <Avatar initials="jd" title="jd" color="cornflower" />
              <Avatar initials="jd" title="jd" color="navy" />
              <Avatar initials="jd" title="jd" color="lavender" />
              <Avatar initials="jd" title="jd" color="purple" />
              <Avatar initials="jd" title="jd" color="grape" />
              <Avatar initials="jd" title="jd" color="lilac" />
              <Avatar initials="jd" title="jd" color="pink" />
              <Avatar initials="jd" title="jd" color="magenta" />
              <Avatar initials="jd" title="jd" color="plum" />
              <Avatar initials="jd" title="jd" color="beige" />
              <Avatar initials="jd" title="jd" color="mink" />
              <Avatar initials="jd" title="jd" color="platinum" />
              <Avatar initials="jd" title="jd" color="anchor" />
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Avatar shape variations</Label>
            <div className="row">
              <Avatar initials="jd" title="jd" shape="circular" />
              <Avatar initials="jd" title="jd" shape="square" />
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Avatar active appearance variations</Label>
            <div className="row">
              <Avatar active initials="jd" title="jd" appearance="ring" />
              <Avatar active initials="jd" title="jd" appearance="shadow" />
              <Avatar
                active
                initials="jd"
                title="jd"
                appearance="ring-shadow"
              />
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Badge</Label>
          <div className="column">
            <Label weight="semibold">Badge color variations</Label>
            <div className="row">
              <Badge color="brand">Brand</Badge>
              <Badge color="danger">Danger</Badge>
              <Badge color="important">Important</Badge>
              <Badge color="informative">Informative</Badge>
              <Badge color="severe">Severe</Badge>
              <Badge color="subtle">Subtle</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="warning">Warning</Badge>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Badge appearance variations</Label>
            <div className="row">
              <Badge appearance="filled">Filled</Badge>
              <Badge appearance="ghost">Ghost</Badge>
              <Badge appearance="outline">Outline</Badge>
              <Badge appearance="tint">Tint</Badge>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Badge shape variations</Label>
            <div className="row">
              <Badge shape="circular">Circular</Badge>
              <Badge shape="rounded">Rounded</Badge>
              <Badge shape="square">Square</Badge>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Badge size variations</Label>
            <div className="row">
              <Badge size="tiny">Tiny</Badge>
              <Badge size="extra-small">Extra-small</Badge>
              <Badge size="small">Small</Badge>
              <Badge size="medium">Medium</Badge>
              <Badge size="large">Large</Badge>
              <Badge size="extra-large">Extra-large</Badge>
            </div>
          </div>
        </div>

        <div className="example-container">
          <Label size="large">Counter badge</Label>
          <div className="column">
            <Label weight="semibold">Counter badge count</Label>
            <div className="row">
              <CounterBadge count="5"></CounterBadge>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Counter badge color variations</Label>
            <div className="row">
              <CounterBadge color="brand">Brand</CounterBadge>
              <CounterBadge color="danger">Danger</CounterBadge>
              <CounterBadge color="important">Important</CounterBadge>
              <CounterBadge color="informative">Informative</CounterBadge>
              <CounterBadge color="severe">Severe</CounterBadge>
              <CounterBadge color="subtle">Subtle</CounterBadge>
              <CounterBadge color="success">Success</CounterBadge>
              <CounterBadge color="warning">Warning</CounterBadge>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Counter badge appearance variations</Label>
            <div className="row">
              <CounterBadge appearance="filled">Filled</CounterBadge>
              <CounterBadge appearance="ghost">Ghost</CounterBadge>
              <CounterBadge appearance="outline">Outline</CounterBadge>
              <CounterBadge appearance="tint">Tint</CounterBadge>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Counter badge shape variations</Label>
            <div className="row">
              <CounterBadge shape="circular">Circular</CounterBadge>
              <CounterBadge shape="rounded">Rounded</CounterBadge>
              <CounterBadge shape="square">Square</CounterBadge>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Counter badge size variations</Label>
            <div className="row">
              <CounterBadge size="tiny">Tiny</CounterBadge>
              <CounterBadge size="extra-small">Extra-small</CounterBadge>
              <CounterBadge size="small">Small</CounterBadge>
              <CounterBadge size="medium">Medium</CounterBadge>
              <CounterBadge size="large">Large</CounterBadge>
              <CounterBadge size="extra-large">Extra-large</CounterBadge>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Checkbox</Label>
          <div className="column">
            <Label weight="semibold">Checkbox default checked</Label>
            <div className="row">
              <form id="checkbox-default">
                <Checkbox checked>Default checked</Checkbox>
              </form>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Checkbox size variations</Label>
            <div className="row">
              <form id="checkbox-size">
                <Checkbox size="medium">Medium</Checkbox>
                <Checkbox size="large">Large</Checkbox>
              </form>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Checkbox shape variations</Label>
            <div className="row">
              <form id="checkbox-shape">
                <Checkbox shape="square">Square</Checkbox>
                <Checkbox shape="circular">Circular</Checkbox>
              </form>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Checkbox indeterminate</Label>
            <div className="row">
              <form id="checkbox-indeterminate">
                <Checkbox indeterminate>Indeterminate</Checkbox>
              </form>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Checkbox disabled</Label>
            <div className="row">
              <form id="checkbox-disabled">
                <Checkbox disabled>Disabled</Checkbox>
              </form>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Radio group</Label>
          <div className="column">
            <Label weight="semibold">Radio group default</Label>
            <div className="row">
              <form id="radiogroup-default">
                <RadioGroup
                  id="radiogroup-default-component"
                  for="radiogroup-default"
                >
                  <Radio value="1">Radio 1</Radio>
                  <Radio value="2">Radio 2</Radio>
                  <Radio value="3">Radio 3</Radio>
                </RadioGroup>
              </form>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Radio group vertical</Label>
            <div className="row">
              <form id="radiogroup-vertical">
                <RadioGroup
                  for="radiogroup-vertical"
                  id="radiogroup-vertical-component"
                  orientation="vertical"
                >
                  <Radio value="1">Radio 1</Radio>
                  <Radio value="2">Radio 2</Radio>
                  <Radio value="3">Radio 3</Radio>
                </RadioGroup>
              </form>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Radio group stacked</Label>
            <div className="row">
              <form id="radiogroup-stacked">
                <RadioGroup
                  for="radiogroup-stacked"
                  id="radiogroup-stacked-component"
                  stacked
                >
                  <Radio value="1">Radio 1</Radio>
                  <Radio value="2">Radio 2</Radio>
                  <Radio value="3">Radio 3</Radio>
                </RadioGroup>
              </form>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Radio</Label>
          <div className="column">
            <Label weight="semibold">Radio checked</Label>
            <div className="row">
              <form id="radio-checked">
                <RadioGroup for="radio-checked" id="radio-checked-component">
                  <Radio value="1" checked>Radio 1</Radio>
                </RadioGroup>
              </form>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Radio disabled</Label>
            <div className="row">
              <form id="radio-disabled">
                <RadioGroup for="radio-disabled" name="radio-disabled-component" id="radio-disabled-component">
                  <Radio value="1" disabled>Radio 1</Radio>
                </RadioGroup>
              </form>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Dialog</Label>
          <div className="column">
            <Label weight="semibold">Dialog modal type variations</Label>
            <div className="row">
              <ToggleButton
                dialogId="dialog-modal"
                label="Open dialog"
                onClick={() => toggleDialog("dialog-modal")}
              >
                Open modal
              </ToggleButton>
              <Dialog id="dialog-modal">
                <Text slot="title">Dialog</Text>
                <Text weight="regular" block>
                  modalType="modal"
                </Text>
                <Button
                  slot="action"
                  onClick={() => toggleDialog("dialog-modal")}
                >
                  Close dialog
                </Button>
              </Dialog>
              <ToggleButton
                dialogId="dialog-nonmodal"
                label="Open non modal dialog"
                onClick={() => toggleDialog("dialog-nonmodal")}
              >
                Open non-modal
              </ToggleButton>
              <Dialog id="dialog-nonmodal" modalType="non-modal">
                <Text slot="title">Dialog</Text>
                <Text weight="regular" block>
                  modalType="non-modal"
                </Text>
                <Button
                  slot="action"
                  onClick={() => toggleDialog("dialog-nonmodal")}
                >
                  Close dialog
                </Button>
              </Dialog>
              <ToggleButton
                dialogId="dialog-alert"
                label="Open alert dialog"
                onClick={() => toggleDialog("dialog-alert")}
              >
                Open alert
              </ToggleButton>
              <Dialog id="dialog-alert" modalType="alert">
                <Text slot="title">Dialog</Text>
                <Text weight="regular" block>
                  modalType="alert"
                </Text>
                <Button
                  slot="action"
                  onClick={() => toggleDialog("dialog-alert")}
                >
                  Close dialog
                </Button>
              </Dialog>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Dialog noTitleAction</Label>
            <div className="row">
              <ToggleButton
                dialogId="dialog-nonmodal"
                label="Open non modal dialog"
                onClick={() => toggleDialog("dialog-noTitleAction")}
              >
                Open no title action
              </ToggleButton>
              <Dialog
                id="dialog-noTitleAction"
                modalType="non-modal"
                noTitleAction
              >
                <Text slot="title">Dialog</Text>
                <Text weight="regular" block>
                  noTitleAction
                </Text>
                <Button
                  slot="action"
                  onClick={() => toggleDialog("dialog-noTitleAction")}
                >
                  Close dialog
                </Button>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Divider</Label>
          <div className="column">
            <Label weight="semibold">Divider align content variations</Label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "24px",
              }}
            >
              <Divider
                align-content="center"
                data-testid="divider-align-content--center"
              >
                <h3>Center</h3>
              </Divider>
              <Divider
                align-content="start"
                data-testid="divider-align-content--start"
              >
                <h3>Start</h3>
              </Divider>
              <Divider
                align-content="end"
                data-testid="divider-align-content--end"
              >
                <h3>End</h3>
              </Divider>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Divider appearance variations</Label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "24px",
              }}
            >
              <Divider
                appearance="strong"
                data-testid="divider-appearance--strong"
              >
                <h3>Strong</h3>
              </Divider>
              <Divider
                appearance="brand"
                data-testid="divider-appearance--brand"
              >
                <h3>Brand</h3>
              </Divider>
              <Divider
                appearance="subtle"
                data-testid="divider-appearance--subtle"
              >
                <h3>Subtle</h3>
              </Divider>
              <Divider
                appearance="default"
                data-testid="divider-appearance--default"
              >
                <h3>Default</h3>
              </Divider>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Divider orientation variations</Label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "44px",
              }}
            >
              <Divider
                data-testid="divider-orientation--horizontal"
                orientation="horizontal"
              >
                <h3>Horizontal</h3>
              </Divider>
              <Divider
                data-testid="divider-orientation--vertical"
                orientation="vertical"
              >
                <h3>Vertical</h3>
              </Divider>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Divider inset</Label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "44px",
              }}
            >
              <Divider data-testid="divider-inset--true" inset>
                <h3>Inset true</h3>
              </Divider>
              <Divider data-testid="divider-inset--false">
                <h3>Inset false</h3>
              </Divider>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Image</Label>
          <div className="column">
            <Label weight="semibold">Image default</Label>
            <div className="row">
              <Image>
                <img alt="Example" src="https://picsum.photos/75/75" />
              </Image>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Image boolean variations</Label>
            <div className="row">
              <div className="column">
                <Label>Bordered</Label>
                <Image bordered>
                  <img alt="Example" src="https://picsum.photos/75/75" />
                </Image>
              </div>
              <div className="column">
                <Label>Block</Label>
                <Image block>
                  <img alt="Example" src="https://picsum.photos/75/75" />
                </Image>
              </div>
              <div className="column">
                <Label>Shadow</Label>
                <Image shadow>
                  <img alt="Example" src="https://picsum.photos/75/75" />
                </Image>
              </div>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Image fit variations</Label>
            <div className="row">
              <div className="column">
                <Label>None</Label>
                <Image fit="none">
                  <img alt="Example" src="https://picsum.photos/75/75" />
                </Image>
              </div>
              <div className="column">
                <Label>Default</Label>
                <Image fit="default">
                  <img alt="Example" src="https://picsum.photos/75/75" />
                </Image>
              </div>
              <div className="column">
                <Label>Center</Label>
                <Image fit="center">
                  <img alt="Example" src="https://picsum.photos/75/75" />
                </Image>
              </div>
              <div className="column">
                <Label>Contain</Label>
                <Image fit="contain">
                  <img alt="Example" src="https://picsum.photos/75/75" />
                </Image>
              </div>
              <div className="column">
                <Label>Cover</Label>
                <Image fit="cover">
                  <img alt="Example" src="https://picsum.photos/75/75" />
                </Image>
              </div>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Image shape variations</Label>
            <div className="row">
              <div className="column">
                <Label>Circular</Label>
                <Image shape="circular">
                  <img
                    alt="Circular shape example"
                    src="https://picsum.photos/75/75"
                  />
                </Image>
              </div>
              <div className="column">
                <Label>Rounded</Label>
                <Image shape="rounded">
                  <img
                    alt="Rounded shape example"
                    src="https://picsum.photos/75/75"
                  />
                </Image>
              </div>
              <div className="column">
                <Label>Square</Label>
                <Image shape="square">
                  <img
                    alt="Square shape example"
                    src="https://picsum.photos/75/75"
                  />
                </Image>
              </div>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Label</Label>
          <div className="column">
            <Label weight="semibold">Label default</Label>
            <div className="row">
              <Label>Label</Label>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Label required</Label>
            <div className="row">
              <Label required>Label</Label>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Label disabled</Label>
            <div className="row">
              <Label disabled>Label</Label>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Label size variations</Label>
            <div className="row">
              <Label size="small">Small label</Label>
              <Label size="medium">Medium label</Label>
              <Label size="large">Large label</Label>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Label weight variations</Label>
            <div className="row">
              <Label weight="regular">Small label</Label>
              <Label weight="semibold">Medium label</Label>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Progress bar</Label>
          <div className="column">
            <Label weight="semibold">Progress bar default</Label>
            <div>
              <ProgressBar max={100} value={50}></ProgressBar>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">
              Progress bar indeterminate variations
            </Label>
            <div>
              <ProgressBar></ProgressBar>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">
              Progress bar validation state variations
            </Label>
            <div>
              <div
                style={{
                  padding: 20,
                }}
              >
                <Label>Success</Label>
                <ProgressBar
                  aria-label='"Progress: 33"'
                  data-testid="validation-success"
                  max={100}
                  shape="rounded"
                  thickness="medium"
                  validationState="success"
                  value={33}
                />
              </div>
              <div
                style={{
                  padding: 20,
                }}
              >
                <Label>Warning</Label>
                <ProgressBar
                  aria-label='"Progress: 33"'
                  data-testid="validation-warning"
                  max={100}
                  shape="rounded"
                  thickness="medium"
                  validationState="warning"
                  value={33}
                />
              </div>
              <div
                style={{
                  padding: 20,
                }}
              >
                <Label>Error</Label>
                <ProgressBar
                  aria-label='"Progress: 33"'
                  data-testid="validation-error"
                  max={100}
                  shape="rounded"
                  thickness="medium"
                  validationState="error"
                  value={33}
                />
              </div>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Progress bar thickness variations</Label>
            <div>
              <div
                style={{
                  padding: 20,
                }}
              >
                <Label>Medium</Label>
                <ProgressBar
                  aria-label='"Progress: 90"'
                  data-testid="thickness-medium"
                  max={100}
                  shape="rounded"
                  thickness="medium"
                  value={90}
                />
              </div>
              <div
                style={{
                  padding: 20,
                }}
              >
                <Label>Large</Label>
                <ProgressBar
                  aria-label='"Progress: 90"'
                  data-testid="thickness-large"
                  max={100}
                  shape="rounded"
                  thickness="large"
                  value={90}
                />
              </div>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Progress bar shape</Label>
            <div>
              <div
                style={{
                  padding: 20,
                }}
              >
                <Label>Rounded</Label>
                <ProgressBar
                  aria-label='"Progress: 75"'
                  data-testid="shape-rounded"
                  max={100}
                  shape="rounded"
                  value={75}
                />
              </div>
              <div
                style={{
                  padding: 20,
                }}
              >
                <Label>Square</Label>
                <ProgressBar
                  aria-label='"Progress: 75"'
                  data-testid="shape-square"
                  max={100}
                  shape="square"
                  value={75}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Slider</Label>
          <div className="column">
            <Label weight="semibold">Slider default</Label>
            <div className="row">
              <Slider max={100} min={0} title="Slider" value={50} />
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Slider orientation</Label>
            <div className="row">
              <Slider
                onChange={() => {}}
                orientation="horizontal"
                title="Horizontal slider"
              />
              <Slider
                onChange={() => {}}
                orientation="vertical"
                title="Vertical slider"
              />
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Slider sizes</Label>
            <div className="row">
              <Slider onChange={() => {}} size="medium" title="Medium slider" />
              <Slider onChange={() => {}} size="small" title="Small slider" />
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Slider steps</Label>
            <div className="row">
              <Slider
                max={100}
                min={0}
                onChange={() => {}}
                step={10}
                title="Steps slider"
              />
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Slider disabled</Label>
            <div className="row">
              <Slider onChange={() => {}} disabled title="Disabled slider" />
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Slider readonly</Label>
            <div className="row">
              <Slider onChange={() => {}} readonly title="Readonly slider" />
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Spinner</Label>
          <div className="column">
            <Label weight="semibold">Spinner default</Label>
            <div className="row">
              <Spinner />
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Spinner appearances</Label>
            <div className="row">
              <div>
                <div
                  style={{
                    padding: 20,
                  }}
                >
                  <code>primary</code>
                  <Spinner appearance="primary" data-testid="appear-primary" />
                </div>
                <div
                  style={{
                    backgroundColor: "#0f6cbd",
                    color: "#fff",
                    padding: 20,
                  }}
                >
                  <code>inverted</code>
                  <Spinner
                    appearance="inverted"
                    data-testid="appear-inverted"
                    size="medium"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Spinner sizes</Label>
            <div className="row">
              <div
                style={{
                  padding: 20,
                }}
              >
                <code>tiny</code>
                <Spinner data-testid="size-tiny" size="tiny" />
              </div>
              <div
                style={{
                  padding: 20,
                }}
              >
                <code>extra-small</code>
                <Spinner data-testid="size-xsmall" size="extra-small" />
              </div>
              <div
                style={{
                  padding: 20,
                }}
              >
                <code>small</code>
                <Spinner data-testid="size-small" size="small" />
              </div>
              <div
                style={{
                  padding: 20,
                }}
              >
                <code>medium</code>
                <Spinner data-testid="size-medium" size="medium" />
              </div>
              <div
                style={{
                  padding: 20,
                }}
              >
                <code>large</code>
                <Spinner data-testid="size-large" size="large" />
              </div>
              <div
                style={{
                  padding: 20,
                }}
              >
                <code>extra-large</code>
                <Spinner data-testid="size-xlarge" size="extra-large" />
              </div>
              <div
                style={{
                  padding: 20,
                }}
              >
                <code>huge</code>
                <Spinner data-testid="size-huge" size="huge" />
              </div>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Switch</Label>
          <div className="column">
            <Label weight="semibold">Switch default</Label>
            <div className="row">
              <Switch>Switch</Switch>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Switch disabled</Label>
            <div className="row">
              <Switch disabled>Switch</Switch>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Switch required</Label>
            <div className="row">
              <Switch required>Switch</Switch>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Switch readonly</Label>
            <div className="row">
              <Switch readonly>Switch</Switch>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Switch label position</Label>
            <div className="row">
              <Switch labelPosition="before">Switch</Switch>
              <Switch labelPosition="after">Switch</Switch>
              <Switch labelPosition="above">Switch</Switch>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Tabs</Label>
          <div className="column">
            <Label weight="semibold">Tabs default</Label>
            <div className="row">
              <Tabs activeid="first-tab">
                <Tab id="first-tab" role="tab">
                  {" "}
                  First tab{" "}
                </Tab>
                <Tab id="second-tab" role="tab">
                  {" "}
                  Second tab
                </Tab>
                <Tab id="third-tab" role="tab">
                  {" "}
                  Third tab
                </Tab>
                <Tab id="fourth-tab" role="tab">
                  {" "}
                  Fourth tab
                </Tab>
                <TabPanel id="first-tab-panel">
                  Tab one tabpanel content
                </TabPanel>
                <TabPanel id="second-tab-panel">
                  Tab two tabpanel content
                </TabPanel>
                <TabPanel id="third-tab-panel">
                  Tab three tabpanel content
                </TabPanel>
                <TabPanel id="fourth-tab-panel">
                  Tab four tabpanel content
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Tabs disabled</Label>
            <div className="row">
              <Tabs activeid="first-disabled-tab" disabled>
                <Tab id="first-tab" role="tab" disabled>
                  Disabled tab 1
                </Tab>
                <Tab id="second-disabled-tab" role="tab" disabled>
                  Disabled tab 2
                </Tab>
                <TabPanel id="first-disabled-tab-panel">
                  Disabled tabpanel content 1
                </TabPanel>
                <TabPanel id="first-disabled-tab-panel">
                  Disabled tabpanel content 2
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Tabs size</Label>
            <div className="row">
              <Tabs activeid="first-tab" size="small">
                <Tab id="first-tab" role="tab">
                  {" "}
                  Small tab{" "}
                </Tab>
                <TabPanel id="first-tab-panel">Small tabpanel content</TabPanel>
              </Tabs>
            </div>
            <div className="row">
              <Tabs activeid="first-tab" size="medium">
                <Tab id="first-tab" role="tab">
                  {" "}
                  Medium tab{" "}
                </Tab>
                <TabPanel id="first-tab-panel">
                  Medium tabpanel content
                </TabPanel>
              </Tabs>
            </div>
            <div className="row">
              <Tabs activeid="first-tab" size="large">
                <Tab id="first-tab" role="tab">
                  {" "}
                  Large tab{" "}
                </Tab>
                <TabPanel id="first-tab-panel">Large tabpanel content</TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Text input</Label>
          <div className="column">
            <Label weight="semibold">Text input default</Label>
            <div className="row">
              <form id="form-textinput-default">
                <TextInput
                  onChange={() => {}}
                  onSelect={function noRefCheck() {}}
                  value="default"
                  id="textinput-default"
                  name="textinput-default"
                >
                  Text input
                </TextInput>
              </form>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Text input placeholder</Label>
            <div className="row">
              <form id="form-textinput-placeholder">
                <TextInput
                  onChange={() => {}}
                  onSelect={function noRefCheck() {}}
                  placeholder="Placeholder"
                  value="placeholder"
                  id="textinput-placeholder"
                  name="textinput-placeholder"
                ></TextInput>
              </form>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Text input content</Label>
            <div className="row">
              <form id="form-textinput-content-end">
                <TextInput
                  onChange={() => {}}
                  onSelect={function noRefCheck() {}}
                  placeholder="Text input with slotted content"
                  value="content-end"
                  id="textinput-content-end"
                  name="textinput-content-end"
                >
                  <span slot="end">
                    <Person20Regular />
                  </span>
                </TextInput>
              </form>
              <br />
              <form id="form-textinput-content-start">
                <TextInput
                  onChange={function noRefCheck() {}}
                  onSelect={function noRefCheck() {}}
                  placeholder="Text input with slotted content"
                  value="content-start"
                  id="textinput-content-start"
                  name="textinput-content-start"
                >
                  <span slot="start">
                    <Person20Regular />
                  </span>
                </TextInput>
              </form>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Text input control size</Label>
            <div className="row">
              <TextInput
                onChange={() => {}}
                onSelect={function noRefCheck() {}}
                placeholder="Small"
                controlSize="small"
                value="content-small"
                id="textinput-small"
                name="textinput-small"
              ></TextInput>
              <TextInput
                onChange={() => {}}
                onSelect={function noRefCheck() {}}
                placeholder="Medium"
                controlSize="medium"
                value="content-medium"
                id="textinput-medium"
                name="textinput-medium"
              ></TextInput>
              <TextInput
                onChange={function noRefCheck() {}}
                onSelect={function noRefCheck() {}}
                placeholder="Large"
                controlSize="large"
                value="content-large"
                id="textinput-large"
                name="textinput-large"
              ></TextInput>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Text input variations</Label>
            <div className="row">
              <TextInput
                type="text"
                placeholder="Enter text"
                id="textinput-text"
                name="textinput-text"
              >
                Text input
              </TextInput>
              <TextInput
                type="tel"
                placeholder="Enter phone number"
                id="textinput-tel"
                name="textinput-tel"
              >
                Tel input
              </TextInput>
              <TextInput
                type="url"
                placeholder="Enter URL"
                id="textinput-url"
                name="textinput-url"
              >
                URL input
              </TextInput>
              <TextInput
                type="email"
                placeholder="Enter email"
                id="textinput-email"
                name="textinput-email"
              >
                Email input
              </TextInput>
              <TextInput
                type="password"
                placeholder="Enter password"
                id="textinput-password"
                name="textinput-password"
              >
                Password input
              </TextInput>
            </div>
          </div>
        </div>
        <div className="example-container">
          <Label size="large">Text</Label>
          <div className="column">
            <Label weight="semibold">Text default</Label>
            <div className="row">
              <Text>
                <span>Text</span>
              </Text>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Text wrap</Label>
            <div className="row">
              <Text>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Arcu cursus euismod quis viverra nibh cras.
                </span>
              </Text>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Text nowrap</Label>
            <div className="row">
              <Text nowrap>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Arcu cursus euismod quis viverra nibh cras.
                </span>
              </Text>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Text truncate</Label>
            <div className="row">
              <Text nowrap truncate>
                <div
                  style={{
                    border: "1px solid black",
                    display: "block",
                    width: "320px",
                  }}
                >
                  Setting <code>truncate</code> and <code>nowrap</code> will
                  truncate when it overflows the container.
                </div>
              </Text>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Text italic</Label>
            <div className="row">
              <Text italic>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Arcu cursus euismod quis viverra nibh cras.
                </span>
              </Text>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Text underline</Label>
            <div className="row">
              <Text underline>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Arcu cursus euismod quis viverra nibh cras.
                </span>
              </Text>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Text strikethrough</Label>
            <div className="row">
              <Text strikethrough>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Arcu cursus euismod quis viverra nibh cras.
                </span>
              </Text>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Text block</Label>
            <div className="row">
              <div>
                <Text block>
                  <span>Fluent text is inline by default. Setting</span>
                </Text>
                <Text block>
                  <span>block</span>
                </Text>
                <Text block>
                  <span>will make it behave as a block element.</span>
                </Text>
              </div>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Text size</Label>
            <div className="row">
              <div>
                <Text block data-testid="size-100" size="100">
                  <span>100</span>
                </Text>
                <Text block data-testid="size-200" size="200">
                  <span>200</span>
                </Text>
                <Text block data-testid="size-300" size="300">
                  <span>300</span>
                </Text>
                <Text block data-testid="size-400" size="400">
                  <span>400</span>
                </Text>
                <Text block data-testid="size-500" size="500">
                  <span>500</span>
                </Text>
                <Text block data-testid="size-600" size="600">
                  <span>600</span>
                </Text>
                <Text block data-testid="size-700" size="700">
                  <span>700</span>
                </Text>
                <Text block data-testid="size-800" size="800">
                  <span>800</span>
                </Text>
                <Text block data-testid="size-900" size="900">
                  <span>900</span>
                </Text>
                <Text block data-testid="size-1000" size="1000">
                  <span>1000</span>
                </Text>
              </div>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Text weight</Label>
            <div className="row">
              <div>
                <Text block data-testid="weight-regular" weight="regular">
                  <span>This text is regular.</span>
                </Text>
                <Text block data-testid="weight-medium" weight="medium">
                  <span>This text is medium.</span>
                </Text>
                <Text block data-testid="weight-semibold" weight="semibold">
                  <span>This text is semibold.</span>
                </Text>
                <Text block data-testid="weight-bold" weight="bold">
                  <span>This text is bold.</span>
                </Text>
              </div>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Text align</Label>
            <div className="row">
              <div
                style={{
                  borderLeft: "1px solid #000",
                  borderRight: "1px solid #000",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  width: "320px",
                }}
              >
                <Text align="start" block data-testid="align-start">
                  <span>Start aligned block.</span>
                </Text>
                <Text align="end" block data-testid="align-end">
                  <span>End aligned block.</span>
                </Text>
                <Text align="center" block data-testid="align-center">
                  <span>Center aligned block.</span>
                </Text>
                <Text align="justify" block data-testid="align-justify">
                  <span>
                    Justify aligned block text stretches wrapped lines to meet
                    container edges.
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="column">
            <Label weight="semibold">Text font</Label>
            <div className="row">
              <div>
                <Text block data-testid="font-base" font="base">
                  <span>Font base.</span>
                </Text>
                <Text block data-testid="font-numeric" font="numeric">
                  <span>Font numeric 0123456789.</span>
                </Text>
                <Text block data-testid="font-monospace" font="monospace">
                  <span>Font monospace.</span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FluentProvider>
  );
}

export default Fluent;
