import React from 'react';
//
import { AppBar, Toolbar, Grid, Button, Typography } from '@material-ui/core';
//
import { NavLink, Link } from 'react-router-dom';
import styles from './Styles.module.css';

const BottomNavBar = () => {
    return (
        <AppBar position="fixed" className={styles.bottomAppBar} >
            <Toolbar
                disableGutters={true}
            >
                    <Grid container spacing={8} justify={"space-around"} alignItems={"center"}>
                        <Grid item>
                            <NavLink to={"/ayuda"} className={styles.navLink}>
                                <Button variant="text" size="medium" className={styles.buttonNav}>
                                    <Typography style={{color:'white'}}>
                                        Ayuda
                                    </Typography>
                                </Button>
                            </NavLink>
                            <NavLink to={"/faq"} className={styles.navLink}>
                                <Button>
                                    Preguntas Frecuentes
                                </Button>
                            </NavLink>
                            <NavLink to={"/ayuda"}  className={styles.navLink}>
                                <Button>
                                    Actualizaciones
                                </Button>
                            </NavLink>
                            <NavLink to={"/ayuda"}  className={styles.navLink}>
                                <Button>
                                    Novedades
                                </Button>
                            </NavLink>
                            <NavLink to={"/colaborar"}  className={styles.navLink}>
                                <Button>
                                    ¿Te gustaría colaborar?
                                </Button>
                            </NavLink>
                            <NavLink to={"/acerca"}  className={styles.navLink}>
                                <Button>
                                   Acerca de
                                </Button>
                            </NavLink>
                            <NavLink to={"/colaborar"}  className={styles.navLink}>
                                <Button>
                                    F
                                </Button>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <Link to="/" target="_blank">
                                Un proyecto de 
                            </Link>
                        </Grid>
                    </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default BottomNavBar;