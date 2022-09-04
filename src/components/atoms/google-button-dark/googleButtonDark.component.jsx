import { ClassNames } from '@emotion/react';

import { signInWithGoogle } from '../../../utils/firebase/auth/auth.util';

const GoogleButtonDark = ({ scale }) => {
	return (
		<ClassNames>
			{({ css, cx }) => (
				<button
					className={css`
						all: unset;
						transform: scale(${scale.lg});

						margin: auto;
						width: fit-content;
						height: 54px;
						background-color: #4285f4;
						border-radius: 2px;
						box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
						transition: all 300ms ease-in-out;
						display: flex;
						justify-content: space-between;
						&:hover {
							box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
							cursor: pointer;
						}
						&:active {
							background: #3367d6;
						}
						@media (max-width: 768px) {
							transform: scale(${scale.md});
						}
						@media (max-width: 540px) {
							transform: scale(${scale.sm});
						}
						@media (max-width: 360px) {
							transform: scale(${scale.xs});
						}
					`}
					onClick={signInWithGoogle}
				>
					<div
						className={css`
							margin: 1px;
							width: 50px;
							height: 50px;
							border-radius: 1px;
							background-color: #ffffff;
							display: flex;
							align-items: center;
							justify-content: space-around;
						`}
					>
						<svg
							version='1.1'
							xmlns='http://www.w3.org/2000/svg'
							width='18px'
							height='18px'
							viewBox='0 0 48 48'
						>
							<g>
								<path
									fill='#EA4335'
									d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'
								></path>
								<path
									fill='#4285F4'
									d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
								></path>
								<path
									fill='#FBBC05'
									d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'
								></path>
								<path
									fill='#34A853'
									d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'
								></path>
								<path fill='none' d='M0 0h48v48H0z'></path>
							</g>
						</svg>
					</div>
					<p
						className={css`
							display: flex;
							color: #ffffff;
							font-size: 16px;
							letter-spacing: 0.2px;
							font-family: 'Roboto';
							margin-left: 1em;
							margin-right: 1em;
							align-items: center;
						`}
					>
						Sign in with Google
					</p>
				</button>
			)}
		</ClassNames>
	);
};

export default GoogleButtonDark;
