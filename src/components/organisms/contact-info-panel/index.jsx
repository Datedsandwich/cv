import React from 'react';

import Card from 'components/atoms/card';
import Grid from 'components/layout/grid';
import photo from '../../../assets/images/horse_mask.jpg'

function ContactInfoPanel() {
    return (
        <Card className='lr-c-card--grey'>
            <Grid.Wrapper className='lr-o-grid--spaced'>
                <Grid.Item className='lr-u-1/3@lg lr-u-1/2@md'>
                    <img className='lr-u-fill-width' src={photo}></img>
                </Grid.Item>
                <Grid.Item className='lr-u-2/3@lg lr-u-1/2@md'>
                    <div className='lr-c-contact-info-panel'>
                        <div>
                            <div className='lr-u-soft-bottom'>
                                <h2>Luke Robinson</h2>
                                <h3>Game and Software Developer</h3>
                            </div>
                            <div className='lr-u-soft-bottom'>
                                <h4>Phone:</h4>
                                <p>07570809503</p>
                            </div>
                            <div className='lr-u-soft-bottom'>
                                <h4>Email:</h4>
                                <p>robinsonlm@live.co.uk</p>
                            </div>
                        </div>
                        <div className='lr-c-contact-info-panel__social-media-buttons'>
                            <ul className='lr-o-list lr-o-list--inline'>
                                <li>
                                    <a href='https://github.com/Datedsandwich'>
                                        <i className='lr-c-icon fa fa-github'></i>
                                    </a>
                                </li>
                                <li className='lr-u-soft-left'>
                                    <a href='https://www.linkedin.com/in/luke-robinson-82b3a698/'>
                                        <i className='lr-c-icon fa fa-linkedin'></i>
                                    </a>
                                </li>
                                <li className='lr-u-soft-left'>
                                    <a href='https://twitter.com/Datedsandwich'>
                                        <i className='lr-c-icon fa fa-twitter'></i>
                                    </a>
                                </li>
                                <li className='lr-u-soft-left'>
                                    <a href='https://www.facebook.com/datedsandwich'>
                                        <i className='lr-c-icon fa fa-facebook'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Grid.Item>
            </Grid.Wrapper>
        </Card>
    )
}

export default ContactInfoPanel;