import * as information from './information.json';

import {
    about,
    help,
    contact,
    interests,
    prolang,
    experience,
    takeTo,
    projects,
}from './utils';

test('help menu populates', () => {
    const helpMenu = help();
    expect(helpMenu).toBeTruthy();
});

test('returns about info string', () => {
    const str = about();
    expect(str).toBeTruthy();
});

test('returns contact info string', () => {
    const str = contact();
    expect(str).toBeTruthy();
});

test('returns interests info string', () => {
    const str = interests();
    expect(str).toBeTruthy();
});

test('returns experience info string', () => {
    const str = experience();
    expect(str).toBeTruthy();
});

test('returns projects info string', () => {
    const str = projects();
    expect(str).toBeTruthy();
});

test('returns prolang info string', () => {
    const str = prolang();
    expect(str).toBeTruthy();
});

test('takeTo returns a valid url', () => {
    // suppress jsdom virtual console error
    window.open = jest.fn(() => ({}));
    const str = takeTo('fiverr');
    expect(str).toBeTruthy();
});

test('information json file exists', () => {
    expect(information).toBeTruthy();
});