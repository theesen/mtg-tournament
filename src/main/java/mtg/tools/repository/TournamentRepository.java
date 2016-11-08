package mtg.tools.repository;

import mtg.tools.domainobject.Tournament;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by t.gieselmann on 11/8/16.
 */

@RepositoryRestResource(collectionResourceRel = "tournament", path = "tournament")
public interface TournamentRepository extends CrudRepository<Tournament, Long>
{
//    List<Tournament> findByName(@Param("name") String name);
//
}
