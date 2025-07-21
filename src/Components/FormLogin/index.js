import PropTypes from 'prop-types';

import './FormLogin.css';

function FormLogin({handleSubmit, handleLogin, handlePassword, handleRegister}) {
    return (
        <form onSubmit={handleSubmit} className="formlogin" action='#'>
            <div className='layout-formlogin'>
                <div className='form-labels'>
                    <label className='label-login'>Login:</label>
                    <label className='label-password'>Password:</label>
                </div>
                <div className='form-inputs'>

                    <input onChange={handleLogin} type="text" name="login" placeholder="Digite seu login" required />
                    <input onChange={handlePassword} type="password" name="password" placeholder="Digite sua senha" required />
                </div>
            </div>
            <div className='form-button'>
                <button type="submit">Entrar</button>
                <button onClick={handleRegister} type="button">Registrar-se</button>
            </div>
        </form>
    );

}

FormLogin.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    //handleLogin: PropTypes.func.isRequired,
    handlePassword: PropTypes.func.isRequired,
    handleRegister: PropTypes.func.isRequired
}

export default FormLogin;