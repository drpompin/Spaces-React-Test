import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import CodeIcon from '@material-ui/icons/Code'
import LightSpeed from 'react-reveal/LightSpeed'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'
import Layout, { siteTitle } from '../components/layout'
import Header from '../components/header'


const name = 'Ayodele'
const appColor = '#ff6347'
const backgroundColor = '#f6efe8'
const darkText = '#c9d1d9'
const darkBackground = '#37474F'


const useStyles = makeStyles((theme) => ({
	imageContainer: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		margin: '40px 0',
	},

	mainMenu: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		padding: '20px 15%',
		margin: '5px 0 0',
		backgroundColor: `${backgroundColor}`,
		minHeight: `calc(100vh - 60px)`,

		[theme.breakpoints.down("xs")]: {
			padding: '20px 1rem',
		}
	},

	toolMenu: {
		width: '100%',
		padding: '20px 15%',
		margin: '5px 0 0',
		backgroundColor: `${backgroundColor}`,
		minHeight: `calc(100vh - 60px)`,

		[theme.breakpoints.down("xs")]: {
			padding: '20px 1rem',
		}
	},

	sectionText: {
		color: `${appColor}`,
		fontSize: '2.6rem',
		textAlign: 'center',
		margin: '0 0 10px',
	},
	
	secondSectionText: {
		fontSize: '1.5rem',
		textAlign: 'center',
		margin: 0,
	},

	imageStyle: {
		width: '40%',
		borderRadius: '50%',
		boxShadow: '0px 1px 5px #989796',
		height: '',

		[theme.breakpoints.down("xs")]: {
			width: '60%'
		}
	},

	aboutSection: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		margin: '0',
		padding: '5rem 15%',
		backgroundColor: '#f6efe8',
		// backgroundColor: '#f6efe8',

		[theme.breakpoints.down("xs")]: {
			padding: '2rem 1rem',
		}
	},

	aboutDiv: {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: '#f6efe8',

		'&:nth-last-of-type(1)': {
			paddingBottom: 0,
		},
		
		[theme.breakpoints.down("xs")]: {
			flexDirection: 'column',
			alignItems: 'center',
		}
	},

	aboutLeft: {
		width: '45%',
		// height: 500,
		backgroundColor: '#f6efe8',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',

		[theme.breakpoints.down("xs")]: {
			width: '100%',
		}
	},

	aboutRight: {
		width: '45%',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPositionY: 'center',

		[theme.breakpoints.down("xs")]: {
			width: '100%',
			height: 250,
			backgroundPositionX: 'center',
		}
	},

	aboutRightSwitch: {
		width: '45%',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPositionY: 'center',

		[theme.breakpoints.down("xs")]: {
			display: 'none',
		}
	},

	aboutRightMobile: {
		display: 'none',

		[theme.breakpoints.down("xs")]: {
			display: 'block !important',
			backgroundSize: 'contain',
			backgroundRepeat: 'no-repeat',
			backgroundPositionY: 'center',
			width: '100%',
			height: 250,
			backgroundPositionX: 'center',
		}
	},

	aboutImageStyle: {
		width: '100%',
	},

	codingHeader: {
		fontSize: '3.125rem',
		fontWeight: 700,
		lineHeight: 1.1875,
		margin: '0 0 1rem !important',
		color: appColor,

		[theme.breakpoints.down("xs")]: {
			fontSize: '2rem',
		}
	},

	codingText: {
		fontWeight: 400,
		lineHeight: 1.44444444,
		letterSpacing: '-0.5px',
		fontSize: '1.125rem',
		textAlign: 'justify',

		[theme.breakpoints.down("xs")]: {
			fontSize: '1.125rem',
			// letterSpacing: 'normal',
			marginTop: 0,
		}
	},

	toolContainer: {
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',

		[theme.breakpoints.down("xs")]: {
			justifyContent: 'space-around',
		}
	},

	toolItem: {
		width: '20.5%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,

		[theme.breakpoints.down("xs")]: {
			width: '34%',
		}
	},

	toolText: {
		fontSize: 14,
		fontWeight: 600,
		fontColor: '#000',
		textTransform: 'capitalize',
		marginTop: 0,
	},

	toolImg: {
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPositionY: 'center',
		width: 80,
		height: 120,

		[theme.breakpoints.down("xs")]: {

		}
	},

	projectSection: {
		// backgroundColor: '#f5f5f5',
		minHeight: 300,
		padding: '20px 15%',
		// backgroundColor: '#edf0f5',

		[theme.breakpoints.down("md")]: {
			padding: 0,
		},

		[theme.breakpoints.down("xs")]: {
			padding: '20px 1rem',
		},
	},

	projectsContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '0 20px',
		flexWrap: 'wrap',

		[theme.breakpoints.down("xs")]: {
			flexDirection: 'column',
			padding: 0,
		},

		
	},

	projectCard: {
		width: '48%',
		display: 'flex',
		flexDirection: 'column',
		borderRadius: 5,
		alignItems: 'space-between',
		marginBottom: 50,
		backgroundColor: '#fff',
		boxShadow: '0 4px 10px rgba(0,0,0,0.12), 0 4px 10px 0 rgba(0,0,0,0.24)',
		boxShadow: '1px 1px 5px 0px rgba(11,0,0,0.12), 0 2px 5px 1px rgba(0,0,0,0.24)',
		transition: 'all 0.5s cubic-bezier(.25,.8,.25,1)',
		overflow: 'hidden',

		'&:hover': {
			boxShadow: '0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22)',
		},

		[theme.breakpoints.down("xs")]: {
			width: '100%',
		}
	},

	projectCardImage: {
		width: '100%',
		height: 250,
		borderBottom: '2px solid lightgrey',
	},

	projectCardName: {

	},

	projectCardText: {
		lineHeight: 1,
		letterSpacing: '-0.5px',
		padding: '10px 20px 20px',
		textAlign: 'justify',
		fontSize: '1.125rem',

		[theme.breakpoints.down("xs")]: {
			padding: 10,
			margin: 0,
		}
	},

	projectTechDiv: {
		margin: 0,
		fontWeight: 600,
		padding: '0 20px',
		textAlign: 'center',

		[theme.breakpoints.down("xs")]: {
			padding: '0 10px',
		}
	},

	projectCardLinkRow: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-around',
		padding: '10px 20px 20px',

		[theme.breakpoints.down("xs")]: {
			padding: '10px 10px 20px',
			justifyContent: 'space-between',
		}
	},

	projectCardLink: {
		cursor: 'pointer'
	},

	footerSection: {
		width: '100%',
		// minHeight: 400,
		backgroundColor: 'tomato',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '100px 15%',

		[theme.breakpoints.down("xs")]: {
			padding: '60px 20px',
		}
	},

	contactContainer: {
		// height: 200,
		width: '60%',
		backgroundColor: '#000',
		borderRadius: 3,
		padding: '2rem',

		[theme.breakpoints.down("xs")]: {
			width: '100%',
		}
	},

	contactHeader: {
		color: '#fff',
			// marginBottom: 5,
		fontWeight: 600,
	},

	contactName: {
		color: '#fff',
		marginBottom: 15,
		fontWeight: 600,
		letterSpacing: 0.1,
	},

	contactText: {
		color: '#fff',
		margin: 0,
		marginBottom: 5,
		fontWeight: 600,
		letterSpacing: 0.5,
		overflowWrap: 'break-word',
		cursor: 'pointer',
		'&:hover': {
			textDecoration: 'underline',
		},

		'&:nth-last-of-type(1)': {
			marginBottom: 0,
		},

		[theme.breakpoints.down("xs")]: {
			marginBottom: 15,
			
			'&:nth-last-of-type(1)': {
				marginBottom: 0,
			},
		},
	},

	copyRight: {
		width: '100%',
		backgroundColor: '#000',
		display: 'flex',
		justifyContent: 'center',
		padding: 15,
	},

	copyRightText: {
		color: 'tomato',
		margin: 0,
		display: 'flex',
		alignItems: 'center',
	},

	sticky: {
        display: 'none',
        position: 'fixed',
        top: '0',
        width :'100%',
        zIndex: 10000,
	},
	
	linkText: {
		color: appColor, 
		cursor: 'pointer',

		'&:hover': {
			// opacity: '0.8',
			color: 'blue',
			textDecoration: 'underline',
		},

		'&:visited': {
			color: 'blue',
		}
	}
}));

	const imageUrl = [
		"html55.png html",
		"csse.png css",
		"js1.png javascript",
		"jquery2.png jquery",
		"bootstrapb.png bootstrap",
		"sass.png sass",
		"reactjs2.png react",
		"redux.png redux",
		"graphql.png graphql",
		"apollo.png apollo",
		"styled-components.png styled-components",
		"git.png git",
	]

export default function Home() {
	const classes = useStyles()
	const [mobileDropDown, setMobileDropdown] = React.useState(false)
	const [darkMode, setDarkMode] = React.useState(false)
	
    const mobileRef = React.useRef(null)
	const headerRef = React.useRef(null)
	const baseRef = React.useRef(null)
	const aboutRef = React.useRef(null)
	const toolRef = React.useRef(null)
	const projectRef = React.useRef(null)
	const reachRef = React.useRef(null)
	
	const handleMobileDropdown = () => {
        setMobileDropdown(!mobileDropDown)
        mobileRef.current.style.width = "100%"
	}
	
	const closeMobileDropdown = () => {
        setMobileDropdown(!mobileDropDown)
        mobileRef.current.style.width = 0
	}
	
	const handleDarkMode = () => {
		setDarkMode(!darkMode)
		closeMobileDropdown()
		setMobileDropdown(false)
	}

	const baseScrollFunction = () => {
		closeMobileDropdown()
		setMobileDropdown(false)
		if (baseRef.current) {
			window.scrollTo({
				behavior: "smooth",
				top: baseRef.current.offsetTop,
			});
		}
	}
	
	const aboutScrollFunction = () => {
		closeMobileDropdown()
		if (aboutRef.current) {
			window.scrollTo({
				behavior: "smooth",
				top: aboutRef.current.offsetTop,
			});
		}
	}
	
	const toolScrollFunction = () => {
		closeMobileDropdown()
		if (toolRef.current) {
			window.scrollTo({
				behavior: "smooth",
				top: toolRef.current.offsetTop,
			});
		}
	}
	
	const projectScrollFunction = () => {
		closeMobileDropdown()
		if (projectRef.current) {
			window.scrollTo({
				behavior: "smooth",
				top: projectRef.current.offsetTop,
			});
		}
	}
	
	const reachScrollFunction = () => {
		closeMobileDropdown()
		if (reachRef.current) {
			window.scrollTo({
				behavior: "smooth",
				top: reachRef.current.offsetTop,
			});
		}
    }

	useEffect(() => {
		const header = document.getElementById("myHeader");
		const sticky = header.offsetTop + 100;

		const scrollCallBack = window.addEventListener("scroll", () => {
			window.pageYOffset > sticky ? headerRef.current.style.display = 'block' : headerRef.current.style.display = 'none'
		});

		return () => {
			window.removeEventListener("scroll", scrollCallBack);
		};
	}, []);
		

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<div ref={headerRef} id="myHeader" className={classes.sticky} >
				<Header 
					projectScrollFunction={projectScrollFunction} 
					closeMobileDropdown={closeMobileDropdown} 
					mobileRef={mobileRef} 
					mobileDropDown={mobileDropDown}
					setMobileDropdown={setMobileDropdown}
					handleMobileDropdown={handleMobileDropdown}
					baseScrollFunction={baseScrollFunction}
					aboutScrollFunction={aboutScrollFunction}
					toolScrollFunction={toolScrollFunction}
					reachScrollFunction={reachScrollFunction}
					handleDarkMode={handleDarkMode}
					darkMode={darkMode}
				/>
            </div>
            
			<Header 
				projectScrollFunction={projectScrollFunction} 
				closeMobileDropdown={closeMobileDropdown} 
				mobileRef={mobileRef} 
				mobileDropDown={mobileDropDown}
				setMobileDropdown={setMobileDropdown}
				handleMobileDropdown={handleMobileDropdown}
				baseScrollFunction={baseScrollFunction}
				aboutScrollFunction={aboutScrollFunction}
				toolScrollFunction={toolScrollFunction}
				reachScrollFunction={reachScrollFunction}
				handleDarkMode={handleDarkMode}
				darkMode={darkMode}
			/>

			<section ref={baseRef} className={classes.mainMenu} style={darkMode ? { backgroundColor: darkBackground, marginTop: 0 } : {}}>
				<div style={darkMode ? { textAlign: 'center', color: darkText } : {textAlign: 'center'}}>
					<h1 className={classes.sectionText} >Hello, I am Ayodele.</h1> 
					<h2 className={classes.secondSectionText}>I'm a Frontend Web Developer based in Lagos.</h2>
					<h2 className={classes.secondSectionText}>Welcome!!!.</h2>
				</div>

				<div className={classes.imageContainer}>
					<img
						src="/images/profile-passport.png"
						className={classes.imageStyle}
						alt={name}
					/>
				</div>
			</section>

			<section ref={aboutRef} className={classes.aboutSection} style={darkMode ? { backgroundColor: darkBackground } : {backgroundColor: '#fff'}}>
				<div className={classes.aboutDiv} style={darkMode ? { backgroundColor: darkBackground } : {backgroundColor: '#fff'}}>
					<span className={classes.aboutLeft} style={darkMode ? { backgroundColor: darkBackground } : {backgroundColor: '#fff'}}>
						<Zoom >
							<h2 className={classes.codingHeader}>Coding is my Hobby</h2>
							
							<p className={classes.codingText} style={ darkMode ? { color: darkText } : {} }>
								Since my first experience of writing code that got shipped to production, I have not looked back.<br/>

								Having worked as a junior frontend developer working on various projects, writing unit tests in Jest and Enzyme,
								 building small projects on the side and learning new technologies, I have been able to build my confidence and 
								 capability to deliver when the need arises.<br/>
								I am proficient in javaScript(ES6) and its React framework and have worked on multiple projects that utilize Reactjs, Nextjs,
								Redux, Graphql/Apollo-client e.t.c.
							</p>
						</Zoom>
					</span>

					<Zoom >
						<span 
							className={classes.aboutRight}
							style={{ 
								backgroundImage: `url("images/development.png")`,
							}}
						>
						</span>
					</Zoom>
				</div>
			</section>

			<section className={classes.aboutSection} style={darkMode ? { backgroundColor: darkBackground } : {}}>
				<div className={classes.aboutDiv} style={darkMode ? { backgroundColor: darkBackground } : {}}>
					<LightSpeed left>
						<span
							className={classes.aboutRightSwitch}
							style={{
								backgroundImage: `url("images/problem-solving2.png")`,
							}}
						>
						</span>
					</LightSpeed>

					<LightSpeed right>
						<span className={classes.aboutLeft} style={darkMode ? { backgroundColor: darkBackground } : {}}>
							<h2 className={classes.codingHeader} >Problem Solving drives my Passion</h2>

							<p className={classes.codingText} style={darkMode ? { color: darkText } : {}}>
								Nothing drives a developer more than the ability to overcome problems faced on the job.<br/>
								While it can be sometimes difficult and time consuming to solve problems encountered, 
								I have learnt to solve problems by trying to understand the problem, identifying the approach 
								and techniques/algorithm required to solve the problem and then implementing my solution. 
								However, in situations where my multiple solutions can't seem to solve the problem, I have 
								learnt to search online(a skill that took me painful time to learn) for solutions, and to 
								seek more experienced opinions where necessary.

								This experience keeps me wanting more; hence, my passion for solving problems.
							</p>
						</span>
					</LightSpeed>

					<LightSpeed>
						<span
							className={ classes.aboutRightMobile }
							style={{
								backgroundImage: `url("images/problem-solving2.png")`,
							}}
						>
						</span>
					</LightSpeed>
				</div>
			</section>

			<section className={classes.aboutSection} style={darkMode ? { backgroundColor: darkBackground } : {backgroundColor: '#fff'}}>
				<div className={classes.aboutDiv} style={darkMode ? { backgroundColor: darkBackground } : {backgroundColor: '#fff'}}>
					<Zoom>
						<span className={classes.aboutLeft} style={darkMode ? { backgroundColor: darkBackground } : { backgroundColor: '#fff'}}>
							<h2 className={classes.codingHeader}>Collaboration and Teamwork</h2>

							<p className={classes.codingText} style={darkMode ? { color: darkText } : {}}>
								One thing I do not take for granted as a developer is the opportunity to 
								work as a member of a team.
								I have experienced how collaboration helps to speed up work and to meet up with set deadlines.<br />
								As a team-worker, I have worked on projects that utlize github and bitbucket as version-control 
								as well as collaboration tools.
							</p>
						</span>
					</Zoom>

					<Zoom>
						<span
							className={classes.aboutRight}
							style={{
								backgroundImage: `url("images/collaborate.png")`,
							}}
						>
						</span>
					</Zoom>
				</div>
			</section>

			<section ref={toolRef} className={classes.mainMenu} style={{ marginTop: 0 }, darkMode ? { backgroundColor: darkBackground, marginTop: 0} : {}}>
				<h1 className={classes.sectionText} style={darkMode ? { color: darkText, marginBottom: 30} : { color: '#000', marginBottom: 30 }}>
					My Toolbox
				</h1>

				<div className={classes.toolContainer}>

					<Zoom>
						{
							imageUrl.map(imgString => {
								return (
									<div className={classes.toolItem} >
										<span
											className={classes.toolImg}
											style={{ backgroundImage: `url("images/${imgString.split(" ")[0]}")` }}
										></span>
										<p className={classes.toolText} style={ darkMode ? {color: darkText} : {} } >
											{imgString.split(" ")[1]}
										</p>
									</div>
								)
							})
						}
					</Zoom>
					
				</div>
			</section>

			<section ref={projectRef} className={classes.projectSection} style={darkMode ? { backgroundColor: darkBackground } : {}}>
				<h1 className={classes.sectionText} style={{ marginBottom: 30 }}>
					Projects
				</h1>
				
				<div className={classes.projectsContainer}>
					<div className={classes.projectCard} style={darkMode ? { backgroundColor: darkBackground } : {}}>
						<Bounce>
							<img 
								src="images/sendbox.png"
								className={classes.projectCardImage}
							/>
						</Bounce>
						
						<p className={classes.projectCardText} style={darkMode ? { color: darkText } : {}}>
							As a junior frontend developer at <Link href="https://www.sendbox.co" passHref><span className={classes.linkText}>Sendbox</span></Link>,
							 I worked on various company projects, utilizing multiple technologies across the projects. <br/>
							  Some of the work done include login and signup forms, shipment booking workflow,
							  get quote workflow as well as work on the partners dashboard showing all transactions (shipments, rejections, failed transactions). 
						</p>

						<p className={classes.projectTechDiv} style={darkMode ? { color: darkText } : {}}>
							React / Redux / Styled-components / Jest / Enzyme
						</p>

						<div className={classes.projectCardLinkRow}>
						</div>
					</div>

					<div className={classes.projectCard} style={darkMode ? { backgroundColor: darkBackground } : {}}>
						<Bounce>
							<img
								src="images/pangaea.png"
								className={classes.projectCardImage}
							/>
						</Bounce>

						<p className={classes.projectCardText} style={darkMode ? { color: darkText } : {}}>
							This project is a coding test I took for a job application. It queries the <Link href="https://store.luminskin.com/products" passHref><span className={classes.linkText}>Luminskin</span></Link> Graphql products
							API and displays the products the page with all the products and their prices.
							Clicking 'Add to cart' adds an item to cart and opens the cart. '+' and '-' signs on cart items
							 increase and decrease quantity of cart items respectively, while also changing the total cost of items in the 
							 cart.
						</p>

						<p className={classes.projectTechDiv} style={darkMode ? { color: darkText } : {}}>
							HTML5 / React / Graphql / Apollo-client / Styled-components
						</p>

						<div className={classes.projectCardLinkRow}>
							<Link href="https://ayodele-lumin-products.netlify.app/" passHref className={classes.projectCardLink}><span className={classes.linkText}>View</span></Link>
							<Link href="https://github.com/drpompin/luminskin-products" passHref className={classes.projectCardLink}><span className={classes.linkText}>Git Repo</span></Link>
						</div>
					</div>

					<div className={classes.projectCard} style={darkMode ? { backgroundColor: darkBackground } : {}}>
						<Bounce>
							<img
								src="images/todo.png"
								className={classes.projectCardImage}
							/>
						</Bounce>
						<p className={classes.projectCardText} style={darkMode ? { color: darkText } : {}}>
							This is a todo app to emphasize my understanding of React Components and state in Programming.
							It's a basic app that adds a todo item when text is entered into the input field followed by Enter.
							The app adds, marks as complete and deletes an item as is desired of the user.
						</p>

						<p className={classes.projectTechDiv} style={darkMode ? { color: darkText } : {}}>
							HTML5 / React / Nextjs / Material-UI
						</p>

						<div className={classes.projectCardLinkRow}>
							<Link href="https://ayodele-todo-app.vercel.app/" passHref className={classes.projectCardLink}><span className={classes.linkText}>View</span></Link>
							<Link href="https://github.com/drpompin/todo-app" passHref className={classes.projectCardLink}><span className={classes.linkText}>Git Repo</span></Link>
						</div>
					</div>
				</div>
			</section>

			<section ref={reachRef} className={classes.footerSection} style={darkMode ? { backgroundColor: darkBackground } : {}}>
				<div className={classes.contactContainer}>
					<h2 className={classes.contactHeader} style={ darkMode ? {color: darkText} : {} }>Want to reach out?</h2>
					<hr style={darkMode ? { color: darkText } : {}} />

					<div>
						<p className={classes.contactName} style={ darkMode ? {color: darkText} : {} }>AYODELE OGUNKANMI</p>

						<p className={classes.contactText} style={ darkMode ? {color: darkText} : {} }>ayo4oyo@gmail.com</p>

						<Link href="https://www.ayodeleogunkanmi.vercel.app" passHref>
							<p className={classes.contactText} style={darkMode ? { color: darkText } : {}}>www.ayodeleogunkanmi.vercel.app</p>						
						</Link>

						<Link href="https://www.linkedin.com/in/ayodele-ogunkanmi/" passHref>
							<p className={classes.contactText} style={darkMode ? { color: darkText } : {}}>www.linkedin.com/in/ayodele-ogunkanmi/</p>
						</Link>
					</div>
				</div>
			</section>

			<div className={classes.copyRight}>
				<p className={classes.copyRightText}>
					&copy; Code by Ayodele <CodeIcon style={{marginLeft: 5}} />
				</p>
			</div>
		</Layout>
	)
}
