import './css/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Jobs from './components/Jobs';
import SearchForm from './components/SearchForm';
import DataFetchProvider from './context/dataFetchContext';
import FormProvider from './context/FormContext';

function App() {
	return (
		<div className="App">
			<Header />
			<DataFetchProvider>
				<FormProvider>
					<main id="job-search">
						<SearchForm />

						<Jobs />
					</main>
				</FormProvider>
			</DataFetchProvider>
			<Footer />
		</div>
	);
}

export default App;
