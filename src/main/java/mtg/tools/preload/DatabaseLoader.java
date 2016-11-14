package mtg.tools.preload;

import mtg.tools.domainobject.Tournament;
import mtg.tools.repository.TournamentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Created by t.gieselmann on 11/13/16.
 */
@Component
public class DatabaseLoader implements CommandLineRunner
{

    private final TournamentRepository repository;


    public DatabaseLoader(TournamentRepository repository)
    {
        this.repository = repository;
    }


    @Override
    public void run(String... strings) throws Exception
    {
        Tournament tournament = new Tournament();
        tournament.setName("Thees Winter Tournament");
        this.repository.save(tournament);
    }
}
